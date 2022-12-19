<script lang="ts">

export default {
    props: {
        inputType: {
            type: String,
            default: "text"
        },
        modelValue: [String]
    },
    methods: {
        updateInput(event: Event) {
            this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
        }
    }

}
</script>

<template>
    <input :value="modelValue" @input.trim="updateInput" type="inputType">
</template>

<style>
input {
    width: 100%;
    height: 40px;
    border: 1px solid teal;
}
</style>