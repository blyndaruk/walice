<template>
  <div class="home">
    <button class="button" @click.prevent="onClick" :class="{ 'is-disabled': clicked }">
      Timer - {{ showSeconds }} <span v-if="showSeconds && showTens"> : </span
      >{{ showTens }}
    </button>
    <SignUpForm></SignUpForm>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import SignUpForm from '@/components/auth/SignUpForm/SignUpForm.vue';

export default defineComponent({
  data() {
    return {
      stopped: true,
      clicked: false,
      showTens: '00' as string | number,
      showSeconds: '00' as string | number,
      tens: 0,
      seconds: 0,
      interval: 0,
      intervalTime: 1000,
    };
  },
  name: 'Home',
  components: {
    SignUpForm,
    HelloWorld,
  },
  methods: {
    onClick(e: MouseEvent) {
      if (e.detail < 2 || this.clicked) return;
      this.stopped ? this.start() : this.stop();
    },
    start() {
      this.stopped = false;
      this.clicked = true;
      clearInterval(this.interval);
      this.interval = setInterval(this.startTimer, 10);
      setTimeout(() => {
        this.clicked = false;
      }, this.intervalTime);
    },
    stop() {
      this.stopped = true;
      this.clicked = true;
      clearInterval(this.interval);
      setTimeout(() => {
        this.clicked = false;
      }, this.intervalTime);
    },
    startTimer() {
      this.tens++;

      if (this.tens <= 9) {
        this.showTens = '0' + this.tens;
      }

      if (this.tens > 9) {
        this.showTens = this.tens;
      }

      if (this.tens > 99) {
        this.seconds++;
        this.showSeconds = '0' + this.seconds;

        this.tens = 0;
        this.showTens = '0' + 0;
      }

      if (this.seconds > 9) {
        this.showSeconds = '0' + this.seconds;
      }
    },
  },
});
</script>

<style lang="scss">
.button {
  cursor: pointer;
  &.is-disabled {
    cursor: not-allowed;
  }
}
</style>
