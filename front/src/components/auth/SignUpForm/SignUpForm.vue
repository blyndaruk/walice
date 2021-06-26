<template>
  <div class="sign-up-form">
    <div class="col-md-6 form-wrapper mx-auto pt-5 pb-5">
      <h2 class="text-center">Sign Up</h2>
      <form id="create-post-form" @submit.prevent="createUser">
        <div class="form-group col-md-12">
          <label for="user_name">Name</label>
          <input
            type="text"
            id="user_name"
            v-model="user.name"
            name="user_name"
            class="form-control"
            placeholder="Enter title"
            autocomplete="name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="user.email"
            name="email"
            class="form-control"
            placeholder="Enter Description"
            autocomplete="email"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            name="password"
            class="form-control"
            autocomplete="new-password"
          />
        </div>

        <div class="form-group col-md-12 text-center">
          <button class="btn btn-success btn-lg" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserInterface from "@/components/User/UserInterface";
import axios from "axios";
import router from "../../../router";
import { server } from "@/utils/helper";

@Options({
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      } as UserInterface,
    };
  },
  methods: {
    createUser(): void {
      let userData = {
        user_name: this.user.name,
        user_email: this.user.email,
        password: this.user.password,
      };
      console.log(userData);
      this.__submitToServer(userData);
    },
    __submitToServer(data: UserInterface): void {
      axios
        .post(`${server.baseURL}/users/user`, data)
        .then(() => router.push({ name: "Users" }));
    },
  },
})
export default class SignUpForm extends Vue {}
</script>

<style scoped lang="scss">
.sign-up-form {
  background-color: #dedede;
}
</style>
