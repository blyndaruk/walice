<template>
  <div class="home">
    <SignUpForm></SignUpForm>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import SignUpForm from '@/components/auth/SignUpForm/SignUpForm.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SignUpForm,
    HelloWorld,
  },
});
</script>
