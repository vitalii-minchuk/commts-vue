<template>
  <section>
    <div class="container">
      <h3 class="base-section-title">sign in</h3>
      <form @submit.prevent="submitForm" autocomplete="off">
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" />
          <p v-if="emailError">{{ emailError }}</p>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" type="password" v-model="password" />
          <p v-if="passwordError">{{ passwordError }}</p>
        </div>
        <button class="base-btn" type="submit">sign in</button>
      </form>
    </div>
    <p>{{ fetchError }}</p>
    <button @click="showToast">show</button>
    <BaseToast v-if="isToastShown" :error="fetchError">
      <p>{{ message }}</p>
    </BaseToast>
  </section>
</template>
<script setup lang="ts">
import { useLoginMutation } from "@/apollo/generated/schema";
import {
  loginUserValidationSchema,
  type UserSubmitLoginForm,
} from "@/validation";
import { useField, useForm } from "vee-validate";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isToastShown = ref<boolean>(false);
const { handleSubmit } = useForm<UserSubmitLoginForm>({
  validationSchema: loginUserValidationSchema,
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const { onDone, mutate, error: fetchError } = useLoginMutation({});
const message = computed(() => fetchError.value?.message || "success");
console.log(message.value);
const submitForm = handleSubmit(() => {
  console.log(password.value, email.value);
  mutate({
    input: {
      password: password.value as string,
      email: email.value as string,
    },
  });
});
console.log(fetchError.value?.message);
function showToast() {
  isToastShown.value = true;

  setTimeout(() => {
    isToastShown.value = false;
  }, 4000);
}

function signInSuccessHandler() {
  router.replace("/");
  showToast();
}

onDone(signInSuccessHandler);
</script>
