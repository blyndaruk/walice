<template>
  <div class="home">
    <SignUpForm></SignUpForm>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import SignUpForm from "@/components/auth/SignUpForm/SignUpForm.vue";

@Options({
  components: {
    SignUpForm,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
