<script lang="ts">
export default {
    props: {
        show: {
            type: Boolean,
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>
<template>
    <div class="overlay" v-if="show" @click="hideDialog">
        <div @click.stop class="content">
            <button @click="hideDialog" class="closeBtn">X</button>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
}

.content {
    position: relative;
    min-height: 200px;
    max-width: 440px;
    min-width: 300px;
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
}

.closeBtn {
    position: absolute;
    right: 15px;
    top: 15px;
    background-color: transparent;
    border: none;
}
</style>