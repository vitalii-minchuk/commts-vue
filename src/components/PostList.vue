<script lang="ts">
import { Post } from '../types';
import PostItem from './PostItem.vue';

export default {
    components: {
        PostItem
    },
    emits: ["remove"],
    props: {
        posts: {
            type: Array<Post>,
        }
    }
}
</script>

<template>
    <h2>Post List</h2>
    <div v-if="!!posts?.length" class="posts">
        <PostItem v-for="post in posts" class="post" :post="post" :key="post.id" @remove="$emit('remove', post.id)" />
    </div>
    <div v-else>
        <p>There is no data</p>
    </div>
</template>

<style>
.posts {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>