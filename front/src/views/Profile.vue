<template>
  <div class="profile">
    <User></User>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import User from "@/components/User/User.vue";

@Options({
  components: {
    User,
  },
})
export default class Home extends Vue {}
</script>
