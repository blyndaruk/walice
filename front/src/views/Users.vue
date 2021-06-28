<template>
  <div class="users container">
    <div class="row">
      <div class="col-md-4" v-for="user in users" :key="user._id">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h2 class="card-img-top">Name: {{ user.user_name }}</h2>
            <p class="card-text">{{ user.user_email }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px">
                <router-link
                  :to="{ name: 'Profile', params: { id: user.user_name } }"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View User
                </router-link>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  v-on:click="deleteUser(user._id)"
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import { server } from '@/utils/helper';

@Options({
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get(`${server.baseURL}/users/users`)
        .then((data) => (this.users = data.data));
    },
    deleteUser(id: string) {
      axios
        .delete(`${server.baseURL}/users/delete?userID=${id}`)
        .then(() => window.location.reload());
    },
  },
})
export default class Home extends Vue {}
</script>
