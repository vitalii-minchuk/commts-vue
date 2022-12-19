<script lang="ts">
export default {
    data() {
        return {
            post: {
                description: "",
                title: ""
            }
        }
    },
    methods: {
        createNewPost() {
            console.log(this.post)
            this.post.id = Date.now()
            this.$emit("create", this.post)
            this.post = {
                title: "",
                description: ""
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="createNewPost">
        <input v-model="post.title" type="text">
        <input v-model="post.description" type="text">
        <button type="submit">add</button>
    </form>
</template>