<script lang="ts">
import axios from 'axios';
import CommentList from '../components/Comments/CommentList.vue';
import { Comment } from '../types';

export default {
    data() {
        return {
            comments: [] as Comment[],
            isLoading: false,
            currentPage: 1
        };
    },
    methods: {
        async fetchComments() {
            try {
                this.isLoading = true
                const response = await axios.get("https://jsonplaceholder.typicode.com/comments", {
                    params: {
                        _limit: 10,
                        _page: this.currentPage
                    }
                });
                this.comments = [...this.comments, ...response.data];

            } catch (error: any) {
                console.log(error.message, "something went wrong")
            } finally {
                this.isLoading = false
            }
        },
        createObserver() {
            const options = {
                rootMargin: "0px",
                threshold: 1.0
            };
            const handleIntersect = (entries: IntersectionObserverEntry[]) => {
                if (entries[0].isIntersecting) {
                    this.currentPage += 1
                }
            }

            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(this.$refs.observableDiv as Element)
        }
    },
    watch: {
        currentPage() {
            this.fetchComments()
        }
    },
    mounted() {
        this.fetchComments();
        this.createObserver()
    },
    components: { CommentList }
}
</script>

<template>
    <CommentList :comments="comments" />
    <div ref="observableDiv">
        <div v-if="isLoading">Loading ...</div>
    </div>
</template>

<style>

</style>