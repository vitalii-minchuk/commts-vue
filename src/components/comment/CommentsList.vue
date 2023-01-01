<template>
  <CommentItem
    v-for="comment in comments"
    :key="comment.id"
    :comment="(comment as Comment)"
  />
</template>
<script setup lang="ts">
import {
  useGetAllPostCommentsQuery,
  type Comment,
} from "@/apollo/generated/schema";
import CommentItem from "./CommentItem.vue";
import { computed } from "vue";
import formatComments from "@/utils/format-comments";

const props = defineProps({
  id: { type: String },
});

const { result } = useGetAllPostCommentsQuery({
  input: { postId: props.id as string },
});
const comments = computed(() =>
  formatComments(result.value?.getAllPostComments as Comment[])
);
</script>
