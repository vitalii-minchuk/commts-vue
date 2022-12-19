<script lang="ts">
import axios from "axios"
import PostList from "./components/PostList.vue"
import PostForm from "./components/PostForm.vue"
import Header from "./components/Header.vue"
import MyDialog from "./components/common/MyDialog.vue"
import { Post } from "./types"
import MySelect from "./components/common/MySelect.vue"

export default {
  components: {
    PostList,
    PostForm,
    Header,
    MyDialog,
    MySelect
  },
  data() {
    return {
      posts: [] as Post[],
      isDialogVisible: false,
      isLoading: false,
      selectedOption: "id",
      sortType: "asc",
      sortTypeOptions: ["asc", "desc"],
      sortOptions: ["id", "title", "body"]
    }
  },
  methods: {
    createPost(post: Post) {
      this.posts.push(post)
      this.isDialogVisible = false
    },
    removePost(id: number) {
      this.posts = this.posts.filter(post => post.id !== id)
    },
    openDialog() {
      this.isDialogVisible = true
    },
    async fetchPosts() {
      this.isLoading = true
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
        this.posts = response.data
      } catch (error: any) {
        console.log(error.message, "something went wrong")
      } finally {
        this.isLoading = false
      }
    },
  },
  watch: {
    selectedOption() {
      if (this.selectedOption === "id") {
        this.posts.sort((postA, postB) => {
          return +postB[this.selectedOption] - +postA[this.selectedOption]
        })
      } else {
        this.posts.sort((postA, postB) => {
          return postA[this.selectedOption]?.localeCompare(postB[this.selectedOption])
        })
      }
    },
    sortType(value) {
      if (value === "desc") {
        if (this.selectedOption === "id") {
          this.posts.sort((postA, postB) => {
            return +postB[this.selectedOption] - +postA[this.selectedOption]
          })
        } else {
          this.posts.sort((postA, postB) => {
            return postA[this.selectedOption]?.localeCompare(postB[this.selectedOption])
          })
        }
      } else {
        if (this.selectedOption === "id") {
          this.posts.sort((postA, postB) => {
            return +postA[this.selectedOption] - +postB[this.selectedOption]
          })
        } else {
          this.posts.sort((postA, postB) => {
            return postB[this.selectedOption]?.localeCompare(postA[this.selectedOption])
          })
        }
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<template>
  <Header />
  <div class="actions">
    <MyButton @click="openDialog">Create new post</MyButton>
    <div class="sorting">
      <p>sort by</p>
      <MySelect v-model="selectedOption" :options="sortOptions" />
      <MySelect v-model="sortType" :options="sortTypeOptions" />
    </div>
  </div>
  <div v-if="isLoading">Loading ...</div>
  <PostList v-else :posts="posts" @remove="removePost" />
  <MyDialog v-model:show="isDialogVisible">
    <PostForm @create="createPost" />
  </MyDialog>
</template>

<style>
.actions {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
}

.sorting {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
