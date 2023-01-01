<template>
  <div class="border border-red-200 ml-3">
    <div>{{ props.comment }}</div>
    <img :src="imgUrl" alt="" />
    <CommentItem
      v-for="comment in children"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>
<script setup lang="ts">
import type { Comment } from "@/apollo/generated/schema";
import { computed, type PropType } from "vue";

const props = defineProps({
  comment: { type: Object as PropType<Comment> },
  comments: { type: Object as PropType<Array<Comment>> },
});

const imgUrl = computed(() => props.comment?.user.avatar || "");
const children = computed(() => props.comment?.children);
</script>
