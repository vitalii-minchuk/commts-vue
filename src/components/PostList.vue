<script lang="ts">
import { Post } from '../types';
import Pagination from './Pagination.vue';
import PostItem from './PostItem.vue';

export default {
    components: {
        PostItem,
        Pagination
    },
    emits: ["remove", "changePage"],
    props: {
        posts: {
            type: Array<Post>,
        },
        totalPages: {
            type: Number
        },
        currentPage: {
            type: Number
        }
    },
    methods: {
        changePage(newPage: number) {
            this.$emit('changePage', newPage)
        }
    }
}
</script>

<template>
    <h2>Post List</h2>
    <div v-if="!!posts?.length" class="posts">
        <TransitionGroup name="post-list" tag="div">
            <PostItem v-for="post in posts" class="post" :post="post" :key="post.id"
                @remove="$emit('remove', post.id)" />
        </TransitionGroup>
        <Pagination :totalPages="totalPages" @changePage="changePage" :currentPage="currentPage" />
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

.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.post-list-move {
    transition: transform 0.5s ease;
}
</style>