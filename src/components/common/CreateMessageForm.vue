<template>
  <input type="text" v-model="message" />
  <button @click="handleCreateMessage">ok</button>
</template>
<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["createMessage"]);

const message = ref("");

const handleCreateMessage = () => {
  emit("createMessage", { message: message.value });
};
</script>
