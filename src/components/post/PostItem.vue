<template>
  <div>
    <BaseCard>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center gap-[20px]">
          <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img :src="imgUrl" alt="some img" />
          </div>
          <p>{{ post.user.username }}</p>
          <p>{{ post.user.email }}</p>
          <p class="grow text-right">{{ post.createdAt }}</p>
        </div>
        <p>{{ post.text }}</p>
        <button @click="showDialog(true)">add comment</button>
      </div>
    </BaseCard>
    <CommentsList :id="post.id" />
    <BaseDialog v-model:show="isDialogShown">
      <CreateMessageForm @create-message="createMessageHandler" />
    </BaseDialog>
  </div>
</template>
<script setup lang="ts">
import {
  useCreateNewCommentMutation,
  type Post,
} from "@/apollo/generated/schema";
import useFetchComments from "@/hooks/useFetchComments";
import type { MessageType } from "@/types";
import { computed, ref, type PropType } from "vue";
import CommentsList from "../comment/CommentsList.vue";
import CreateMessageForm from "../common/CreateMessageForm.vue";

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});

const isDialogShown = ref<boolean>(false);
const { refetch } = useFetchComments(props.post.id as string);
const { mutate, onDone } = useCreateNewCommentMutation({});
const imgUrl = computed(() => props.post.user.avatar || "");

function showDialog(value: boolean) {
  isDialogShown.value = value;
}

function createMessageSuccessHandler() {
  showDialog(false);
  refetch();
}

onDone(createMessageSuccessHandler);

function createMessageHandler({ message, picture }: MessageType) {
  mutate({
    input: {
      text: message,
      image_url: picture,
      postId: props.post.id as string,
      parentId: undefined,
    },
  });
}
</script>
