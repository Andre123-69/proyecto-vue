<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/Lista-De-Tareas">Lista de tareas</router-link></li>
      <li><router-link to="/Registro">Registrar</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import useRegistrarStore from "@/modules/registro/stores/registrarStore.js";
import { ref, watch } from "vue";

const registrarStore = useRegistrarStore();

const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);

watch(
  () => registrarStore.nombre,
  (newValue) => {
    nombre.value = newValue;
  },
);

watch(
  () => registrarStore.email,
  (newValue) => {
    email.value = newValue;
  },
);
</script>

<style>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
</style>
