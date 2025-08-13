<template>
  <div class="">
    <h2>Lista de Tareas</h2>
    <input
      class="border border-gray-300 rounded p-1 mb-2"
      type="text"
      v-model="nuevaTarea"
      placeholder="Añadir nueva tarea"
      @keyup.enter="addTarea"
    />
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}

        <button @click="deleteTarea(index)" class="bg-red-500 text-white px-4 py-0.5 rounded mb-2">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const tareas = ref([]);
const nuevaTarea = ref("");

const addTarea = () => {
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = "";
};

const deleteTarea = (index) => {
  tareas.value.splice(index, 1);
};
</script>

<style scoped></style>
