<script lang="ts">
export default {
    props: {
        modelValue: {
            type: String
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
    <select @change="changeOption">
        <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
</template>

<style>

</style>