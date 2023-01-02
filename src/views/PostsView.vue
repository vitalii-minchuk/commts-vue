<template>
  <section>
    <div class="base-container">
      <p>{{ loading ? "Loading..." : null }}</p>
      <div>
        <AddNewPost />
      </div>
      <div>
        <PostItem v-for="post in posts" :key="post.id" :post="(post as Post)" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useGetPostsQuery, type Post } from "@/apollo/generated/schema";
import AddNewPost from "@/components/post/AddNewPost.vue";
import PostItem from "@/components/post/PostItem.vue";
import { computed, provide } from "vue";

const { result, loading, refetch } = useGetPostsQuery({
  posts: { take: 25, skip: 0, orderType: "asc", orderBy: "createdAt" },
});

provide("refetch-posts", refetch);

const posts = computed(() => result.value?.getAllPosts);
</script>
