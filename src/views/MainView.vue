<template>
  <Headers></Headers>
  <div class="">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Headers from "@/components/Headers.vue";
</script>

<style scoped>

</style>
