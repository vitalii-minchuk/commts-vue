<template>
  <CommentItem
    v-for="comment in comments"
    :key="comment.id"
    :comment="(comment as Comment)"
    :postId="id"
  />
</template>
<script setup lang="ts">
import type { Comment } from "@/apollo/generated/schema";
import useFetchComments from "@/hooks/useFetchComments";
import formatComments from "@/utils/format-comments";
import { computed } from "vue";
import CommentItem from "./CommentItem.vue";

const props = defineProps({
  id: { type: String },
});

const { result } = useFetchComments(props.id as string);

const comments = computed(() =>
  formatComments(result.value?.getAllPostComments as Comment[])
);
</script>
