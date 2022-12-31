<template>
  <div>
    {{ props.post.user.username }}
    <img :src="imgUrl" alt="" />
  </div>
</template>
<script setup lang="ts">
import type { Post } from "@/apollo/generated/schema";
import { computed, type PropType } from "vue";

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
});

const imgUrl = computed(() => props.post.user.avatar || "");
</script>
