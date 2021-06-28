<template>
  <div class="text-center">
    <div class="col-sm-12">
      <h4 style="margin-top: 30px">
        <small>
          <button class="btn btn-success" v-on:click="navigate()">
            View All Users
          </button>
        </small>
      </h4>
      <hr />
      <h2>Name: {{ user.user_name }}</h2>
      <h5>Email: {{ user.user_email }}</h5>
      <h5>Password: {{ user.password }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import router from '../../router';
import { server } from '@/utils/helper';

import UserInterface from './UserInterface';

@Options({
  data() {
    return {
      id: 0,
      user: {} as UserInterface,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get(`${server.baseURL}/users/profile/${this.id}`)
        .then((data) => (this.user = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
})
export default class User extends Vue {}
</script>

<style scoped lang="scss"></style>
