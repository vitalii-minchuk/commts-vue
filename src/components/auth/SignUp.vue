<template>
  <section>
    <div class="container">
      <h3 class="base-section-title">sign up</h3>
      <form @submit.prevent="submitForm" autocomplete="off">
        <div>
          <label for="username">User name:</label>
          <input
            id="username"
            type="text"
            v-model="username"
            @blur="setFieldTouched('username', true)"
          />
          <p v-if="errors.username">
            {{ errors.username }}
          </p>
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" />
          <p v-if="errors.email">{{ errors.email }}</p>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" type="password" v-model="password" />
          <p v-if="errors.password">{{ errors.password }}</p>
        </div>
        <div>
          <label for="homePageUrl">Home page:</label>
          <input id="homePageUrl" type="text" v-model="homePageUrl" />
          <p v-if="errors.homePageUrl">{{ errors.homePageUrl }}</p>
        </div>
        <button type="submit">sign up</button>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  registerUserValidationSchema,
  type UserSubmitRegisterForm,
} from "@/validation";
import { useForm, useField } from "vee-validate";
import { computed } from "vue";

const schema = computed(() => registerUserValidationSchema);

const { values, errors, meta, setFieldTouched, useFieldModel, handleSubmit } =
  useForm<UserSubmitRegisterForm>({
    validationSchema: schema,
  });

// const {
//   setErrors,
//   errorMessage,
//   value: username,
//   meta: metaUsername,
//   setTouched: setTouchedUsername,
// } = useField("username");
const [email, password, username, homePageUrl] = useFieldModel([
  "email",
  "password",
  "username",
  "homePageUrl",
]);

function submitForm() {
  console.log("first");
  console.log(errors, values);

  // setErrors("dsfsfsddfsfddsdf");
  // setFieldTouched("username", true);

  // console.log(metaUsername.touched);
}
</script>
