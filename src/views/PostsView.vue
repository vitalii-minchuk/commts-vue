<template>
  <section>
    <div class="base-container">
      <p>{{ loading ? "Loading..." : null }}</p>
      <div v-if="me">
        <AddNewPost />
      </div>
      <p v-else>You have to be authorized to post messages</p>
      <div>
        <PostItem v-for="post in posts" :key="post.id" :post="(post as Post)" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  useGetPostsQuery,
  useMeQuery,
  type Post,
} from "@/apollo/generated/schema";
import AddNewPost from "@/components/post/AddNewPost.vue";
import PostItem from "@/components/post/PostItem.vue";
import { computed, provide, onMounted, ref } from "vue";

const {
  result: postsResult,
  loading,
  refetch,
} = useGetPostsQuery({
  posts: { take: 25, skip: 0, orderType: "desc", orderBy: "createdAt" },
});
const { result: meResult, refetch: refetchMe } = useMeQuery({});
const me = ref(meResult.value?.me.id);
const posts = computed(() => postsResult.value?.getAllPosts);

onMounted(refetchMe);
provide("refetch-posts", refetch);
</script>
