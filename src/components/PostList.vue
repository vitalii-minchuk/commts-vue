<script lang="ts">
import PostItem from './PostItem.vue';

export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
        }
    }
}
</script>

<template>
    <h2>Post List</h2>
    <div class="posts">
        <PostItem v-for="post in posts" class="post" :post="post" />
    </div>
</template>

<style>
.posts {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>