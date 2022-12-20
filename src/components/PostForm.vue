<script lang="ts">
export default {
    data() {
        return {
            post: {
                id: 0,
                body: "",
                title: ""
            }
        };
    },
    methods: {
        createNewPost() {
            if (this.post.title && this.post.body) {
                this.post.id = Date.now();
                this.$emit("create", this.post);
                this.post = {
                    id: 0,
                    title: "",
                    body: ""
                };
            }
        }
    },
}
</script>

<template>
    <form @submit.prevent="createNewPost">
        <MyInput v-focus v-model="post.title" />
        <MyInput v-model="post.body" />
        <MyButton type="submit">add</MyButton>
    </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px 30px;
}
</style>