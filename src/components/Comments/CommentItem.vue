<script lang="ts">

export default {
    props: {
        comment: {
            type: Object
        }
    }
}
</script>

<template>
    <div class="comment">
        <p>{{ comment?.id }}</p>
        <h4>{{ comment?.name }}</h4>
        <p>{{ comment?.email }}</p>
        <p>{{ comment?.body }}</p>
    </div>
</template>

<style>
.comment {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    border: 1px solid teal;
}
</style>