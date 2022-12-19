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
    <button :style="{ backgroundColor: color }">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    width: 100px;
    height: 40px;
}
</style>