<script lang="ts">
export default {
    props: {
        color: {
            type: String,
            default: "transparent"
        }
    }
}
</script>
<template>
    <button class="btn" :style="{ backgroundColor: color }">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    padding: 0 20px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid teal;
    cursor: pointer;
}

.btn:hover {
    opacity: 0.7;
}
</style>