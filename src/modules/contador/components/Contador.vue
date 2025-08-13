<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <h1>Hello</h1>
  <button @click="incrementar" class="bg-blue-500 text-white px-4 py-1 rounded mr-2">Increment</button>
  <button @click="decrementar" class="bg-red-500 text-white px-4 py-1 rounded">Decrement</button>
  <p>Count: {{ count }}</p>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const incrementar = () => {
  count.value++;
};
const decrementar = () => {
  count.value--;
};
</script>

<style scoped></style>
