<script lang="ts">
import type { Comment } from '../../store/types';
import CommentItem from './CommentItem.vue';


export default {
    components: { CommentItem },
    props: {
        comments: {
            type: Array<Comment>
        }
    }
}
</script>

<template>
    <h2>Comment List</h2>
    <div v-if="!!comments?.length" class="comments_wrapper">
        <CommentItem v-for="comment in comments" :comment="comment" :key="comment?.id" />
    </div>
    <div v-else>
        <p>There is no data</p>
    </div>
</template>

<style>
.comments_wrapper {}
</style>