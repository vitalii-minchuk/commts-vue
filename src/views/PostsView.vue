<template>
  <section>
    <div class="base-container">
      <p>{{ loading ? "Loading..." : null }}</p>
      <div>
        <PostItem v-for="post in posts" :key="post.id" :post="(post as Post)" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useGetPostsQuery, type Post } from "@/apollo/generated/schema";
import PostItem from "@/components/post/PostItem.vue";
import { computed } from "vue";

const { result, loading } = useGetPostsQuery({
  posts: { take: 10, skip: 0, orderType: "asc", orderBy: "createdAt" },
});

const posts = computed(() => result.value?.getAllPosts);
</script>
