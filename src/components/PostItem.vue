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
    <div class="post">
        <p>{{ post.id }}</p>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
        <div>
            <MyButton @click="$router.push(`/posts/${post.id}`)">details</MyButton>
            <MyButton @click="deletePost" :color="'pink'">Delete</MyButton>
        </div>
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