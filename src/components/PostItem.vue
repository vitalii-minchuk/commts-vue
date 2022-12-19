<script lang="ts">
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="post">
        <h4>{{ post.title }}</h4>
        <p>{{ post.description }}</p>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    border: 1px solid teal;
}
</style>