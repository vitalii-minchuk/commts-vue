<template>
  <div></div>
</template>
<script setup lang="ts">
import type { Comment } from "@/apollo/generated/schema";
import type { PropType } from "vue";

const props = defineProps({
  comments: { type: Object as PropType<Array<Comment>>, required: true },
});
</script>
