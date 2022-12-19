<script lang="ts">
import PostList from "./components/PostList.vue"
import PostForm from "./components/PostForm.vue"
import Header from "./components/Header.vue"

export default {
  components: {
    PostList, PostForm, Header
  },
  data() {
    return {
      posts: [{ id: 2344443, title: "helleo", description: "dfklsj ksjkfsjkf" }],

    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    }
  }
}
</script>

<template>
  <Header />
  <PostForm @create="createPost" />
  <PostList :posts="posts" />
</template>

<style>

</style>
