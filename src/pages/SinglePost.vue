<script lang="ts">import axios from 'axios'
import { Post } from '../types'

export default {
    data() {
        return {
            post: {} as Post
        }
    },
    methods: {
        async fetchPost() {
            try {
                const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                console.log(response.data)
                this.post = response.data
            } catch (error: any) {
                console.log(error.message, "something went wrong")
            }
        },
    },
    mounted() {
        this.fetchPost()
    }
}
</script>


<template>
    <div class="container">
        <div class="wrapper">
            <div class="heading">
                <p>{{ post.id }}</p>
                <h4>{{ post.title }}</h4>
            </div>
            <p class="content">{{ post.body }}</p>
        </div>
    </div>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.heading {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}

.content {
    width: 80%;
    text-align: center;
}
</style>