<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <h1>Hello</h1>
  <button @click="incrementar">Increment</button>
  <button @click="decrementar">Decrement</button>
  <p>Count: {{ count }}</p>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const incrementar = () => {
  count.value++
}
const decrementar = () => {
  count.value--
}
</script>

<style scoped>
button {
  margin-right: 10px;
}
p {
  color: red;
}
</style>
