<template>
  <teleport to="body">
    <transition name="fade">
      <div
        class="fixed left-0 right-0 top-0 bottom-0 bg-slate-800/60 w-screen h-screen grid"
        v-if="show"
        @click="hideDialog"
      >
        <div
          @click.stop
          class="relative py-[40px] px-[20px] min-w-[300px] max-w-[440px] min-h-[200px] rounded-lg m-auto bg-slate-100"
        >
          <button
            @click="hideDialog"
            class="absolute cursor-pointer right-[15px] top-[10px]"
          >
            X
          </button>
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  show: { type: Boolean, required: true },
});
const emit = defineEmits(["update:show"]);
const show = computed(() => props.show);

const hideDialog = () => {
  emit("update:show", false);
};
</script>
