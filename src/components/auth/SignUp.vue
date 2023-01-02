<template>
  <section>
    <div class="container">
      <h3 class="base-section-title">sign up</h3>
      <form @submit.prevent="submitForm" autocomplete="off">
        <div>
          <label for="username">User name:</label>
          <input id="username" type="text" v-model="username" />
          <p v-if="usernameError">
            {{ usernameError }}
          </p>
        </div>
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
        <div>
          <label for="homePageUrl">Home page:</label>
          <input id="homePageUrl" type="text" v-model="homePageUrl" />
          <p v-if="homePageUrlError">{{ homePageUrlError }}</p>
        </div>
        <button class="base-btn" type="submit">sign up</button>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRegisterUserMutation } from "@/apollo/generated/schema";
import {
  registerUserValidationSchema,
  type UserSubmitRegisterForm,
} from "@/validation";
import { useField, useForm } from "vee-validate";
import { useRouter } from "vue-router";

const router = useRouter();
const { handleSubmit } = useForm<UserSubmitRegisterForm>({
  validationSchema: registerUserValidationSchema,
});

const { value: username, errorMessage: usernameError } = useField("username");
const { value: email, errorMessage: emailError } = useField("email");
const { value: homePageUrl, errorMessage: homePageUrlError } =
  useField("homePageUrl");
const { value: password, errorMessage: passwordError } = useField("password");

const { onDone, mutate } = useRegisterUserMutation({});
const emit = defineEmits(["redirect-to-login"]);

onDone(() => emit("redirect-to-login"));

const submitForm = handleSubmit(() => {
  mutate({
    input: {
      password: password.value as string,
      email: email.value as string,
      username: username.value as string,
      homePageUrl: homePageUrl.value as string,
    },
  });
});
</script>
