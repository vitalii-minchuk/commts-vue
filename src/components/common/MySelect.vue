<script lang="ts">
export default {
    props: {
        modelValue: {
            type: [String, Number]
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event: Event) {
            this.$emit('update:modelValue', (event.target as HTMLSelectElement).value)
        }
    }
}
</script>

<template>
    <select class="select" @change="changeOption">
        <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
</template>

<style scoped>
.select {
    padding: 0 5px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid teal;
    cursor: pointer;
}
</style>