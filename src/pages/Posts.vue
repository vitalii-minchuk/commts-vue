<script lang="ts">
import axios from "axios"
import { mapActions, mapGetters, mapMutations, mapState } from "vuex"
import MyButton from "../components/common/MyButton.vue"
import MyDialog from "../components/common/MyDialog.vue"
import MyInput from "../components/common/MyInput.vue"
import MySelect from "../components/common/MySelect.vue"
import PostForm from "../components/PostForm.vue"
import PostList from "../components/PostList.vue"
import type { Post } from "../store/types"

export default {
    components: {
        MyButton,
        MySelect,
        MyInput,
        PostList,
        MyDialog,
        PostForm
    },
    data() {
        return {
            isDialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post: Post) {
            this.posts = [post, ...this.posts]
            this.isDialogVisible = false
        },
        removePost(id: number) {
            this.posts = this.posts.filter(post => post.id !== id)
        },
        openDialog() {
            this.isDialogVisible = true
        },
        setPage(newPage: number) {
            this.currentPage = newPage
        }
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            // isLoading: false,
            // searchStr: "",
            // selectedOption: "id",
            // sortType: "asc",
            // showPosts: 5,
            // sortTypeOptions: ["asc", "desc"],
            // sortOptions: ["id", "title", "body"],
            // showPagesOptions: [5, 10, 15],
            // currentPage: 1,
            // totalPages: 0,
        }),
        ...mapGetters({
            filteredPosts: 'post/filteredPosts'
        }),
        // filteredPosts() {
        //     return [...this.posts].filter(post => post.title.includes(this.searchStr))
        // }
    },
    watch: {
        currentPage() {
            this.fetchPosts()
        },
        showPosts() {
            this.currentPage = 1
            this.fetchPosts()
        },
        selectedOption() {
            if (this.selectedOption === "id") {
                this.posts.sort((postA, postB) => {
                    return Number(postB[this.selectedOption as keyof Post]) - Number(postA[this.selectedOption as keyof Post])
                })
            } else {
                this.posts.sort((postA, postB) => {
                    return String(postA[this.selectedOption as keyof Post])?.localeCompare(String(postB[this.selectedOption as keyof Post]))
                })
            }
        },
        sortType(value) {
            if (value === "desc") {
                if (this.selectedOption === "id") {
                    this.posts.sort((postA, postB) => {
                        return Number(postB[this.selectedOption as keyof Post]) - Number(postA[this.selectedOption as keyof Post])
                    })
                } else {
                    this.posts.sort((postA, postB) => {
                        return String(postA[this.selectedOption as keyof Post])?.localeCompare(String(postB[this.selectedOption as keyof Post]))
                    })
                }
            } else {
                if (this.selectedOption === "id") {
                    this.posts.sort((postA, postB) => {
                        return Number(postA[this.selectedOption as keyof Post]) - Number(postB[this.selectedOption as keyof Post])
                    })
                } else {
                    this.posts.sort((postA, postB) => {
                        return String(postB[this.selectedOption as keyof Post])?.localeCompare(String(postA[this.selectedOption as keyof Post]))
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
    <div class="container">
        <div class="actions">
            <MyButton @click="openDialog">Create new post</MyButton>
            <div class="show-pages">
                <p>show</p>
                <MySelect v-model="showPosts" :options="showPagesOptions" />
            </div>
            <div>
                <MyInput v-model.trim="searchStr" :placeholder="'Search...'" />
            </div>
            <div class="sorting">
                <p>sort by</p>
                <MySelect v-model="selectedOption" :options="sortOptions" />
                <MySelect v-model="sortType" :options="sortTypeOptions" />
            </div>
        </div>
        <div v-if="isLoading">Loading ...</div>
        <PostList v-else :posts="filteredPosts" @remove="removePost" @changePage="setPage" :totalPages="totalPages"
            :currentPage="currentPage" />
        <MyDialog v-model:show="isDialogVisible">
            <PostForm @create="createPost" />
        </MyDialog>
    </div>
</template>

<style>
.actions {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.show-pages {
    display: flex;
    align-items: center;
    gap: 10px;

}

.sorting {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
