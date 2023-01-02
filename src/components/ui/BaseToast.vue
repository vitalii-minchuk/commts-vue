<template>
  <teleport to="#app">
    <transition name="slide">
      <div
        class="border-l-4 fixed top-[70px] right-[20px] bg-slate-400 w-[100px] py-1 px-4 rounded-sm"
        :class="error ? 'border-red-500' : 'border-green-500'"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
const props = defineProps({
  error: { type: Boolean },
});
</script>
