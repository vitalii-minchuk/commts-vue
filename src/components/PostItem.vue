<script lang="ts">
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        deletePost() {
            this.$emit('remove', this.post.id)
        }
    }
}
</script>

<template>
    <div class="post-box">
        <p>{{ post.id }}</p>
        <div class="post-content">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
        </div>
        <div class="post-actions">
            <MyButton @click="$router.push(`/posts/${post.id}`)">details</MyButton>
            <MyButton @click="deletePost" :color="'pink'">Delete</MyButton>
        </div>
    </div>
</template>

<style scoped>
.post-box {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    border: 1px solid teal;
    border-radius: 8px;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
}

.post-actions {
    flex-shrink: 0;
    width: 90px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.post-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

}
</style>