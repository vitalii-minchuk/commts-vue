<script lang="ts">

export default {
    props: {
        inputType: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
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
    <input class="input" :value="modelValue" @input.trim="updateInput" :placeholder="placeholder" type="inputType">
</template>

<style scoped>
.input {
    width: 100%;
    height: 40px;
    border: 1px solid teal;
    padding: 0 10px;
    border-radius: 8px;
}
</style>