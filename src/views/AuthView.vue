<template>
  <section>
    <div class="base-container">
      <SignIn v-if="login" />
      <SignUp v-if="!login" @redirect-to-login="switchMode" />
      <button @click="switchMode">{{ btnCaption }}</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
import { ref, computed } from "vue";

const login = ref<boolean>(true);
const btnCaption = computed(() =>
  login.value ? "Switch to sign up" : "Switch to sign in"
);

function switchMode() {
  login.value = !login.value;
}
</script>
