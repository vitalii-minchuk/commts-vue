<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import TheHeader from "@/components/layout/TheHeader.vue";

const route = useRoute();
</script>

<template>
  <TheHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div :key="route.fullPath">
          <component :is="Component" />
        </div>
      </transition>
    </RouterView>
  </main>
</template>

<style></style>
