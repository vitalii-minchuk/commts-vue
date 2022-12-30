<template>
  <section>
    <h1 class="text-4xl text-red-800">hello</h1>
    <p>{{ result?.getAllPosts }}</p>
    <p>{{ result }}</p>
    <p>{{ loading }}</p>
    <!-- <button @click="showPosts">ok</button> -->
    <!-- <p>{{ posts[1]?.user.username || "" }}</p> -->
  </section>
</template>
<script setup lang="ts">
import { GetPostsDocument, useGetPostsQuery } from "@/apollo/generated/schema";

const { result, loading } = useGetPostsQuery({
  posts: { take: 5, skip: 0, orderType: "asc", orderBy: "createdAt" },
});

console.log(result.value?.getAllPosts);
// apollo: {
//   posts: {
//     query: GetPostsDocument,
//     update: (posts) => posts.getAllPosts,
//     variables: {
//       posts: {
//         take: 5,
//         skip: 0,
//         orderType: "asc",
//         orderBy: "createdAt",
//       },
//     },
//   },
// },
</script>
