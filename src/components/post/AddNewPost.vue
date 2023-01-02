<template>
  <section>
    <div class="container">
      <button @click="showDialog(true)">Add Post +</button>
    </div>
    <BaseDialog v-model:show="isDialogShown">
      <CreateMessageForm @create-message="createMessageHandler" />
    </BaseDialog>
  </section>
</template>
<script setup lang="ts">
import { useCreatePostMutation } from "@/apollo/generated/schema";
import CreateMessageForm from "@/components/common/CreateMessageForm.vue";
import type { MessageType } from "@/types";
import { inject, ref } from "vue";

const isDialogShown = ref<boolean>(false);
const { mutate, onDone } = useCreatePostMutation({});
const refetchPosts = inject<any>("refetch-posts");

function showDialog(value: boolean) {
  isDialogShown.value = value;
}

function createMessageSuccessHandler() {
  showDialog(false);
  refetchPosts();
}

onDone(createMessageSuccessHandler);

function createMessageHandler({ message, picture }: MessageType) {
  mutate({
    input: {
      text: message,
      image_url: picture,
    },
  });
}
</script>
