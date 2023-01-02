<template>
  <div class="border-l-2 border-red-200 pl-4">
    <BaseCard>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center gap-[20px]">
          <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img :src="imgUrl" alt="some img" />
          </div>
          <p>{{ props.comment?.user.username }}</p>
          <p>{{ props.comment?.user.email }}</p>
          <p class="grow text-right">{{ props.comment?.createdAt }}</p>
        </div>
        <p>{{ props.comment?.text }}</p>
        <button @click="showDialog(true)">add comment</button>
      </div>
    </BaseCard>
    <CommentItem
      v-for="comment in children"
      :key="comment.id"
      :comment="comment"
      :postId="postId"
    />
    <BaseDialog v-model:show="isDialogShown">
      <CreateMessageForm @create-message="createMessageHandler" />
    </BaseDialog>
  </div>
</template>
<script setup lang="ts">
import {
  useCreateNewCommentMutation,
  type Comment,
} from "@/apollo/generated/schema";
import useFetchComments from "@/hooks/useFetchComments";
import type { MessageType } from "@/types";
import { computed, ref, type PropType } from "vue";
import CreateMessageForm from "../common/CreateMessageForm.vue";

const props = defineProps({
  comment: { type: Object as PropType<Comment> },
  postId: { type: String },
});
const isDialogShown = ref<boolean>(false);
const { mutate, onDone } = useCreateNewCommentMutation({});
const imgUrl = computed(() => props.comment?.user.avatar || "");
const children = computed(() => props.comment?.children);
const { refetch } = useFetchComments(props.postId as string);

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
      postId: props.postId as string,
      parentId: props.comment?.id,
    },
  });
}
</script>
