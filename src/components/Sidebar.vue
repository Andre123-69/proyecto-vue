<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/Lista-De-Tareas">Lista de tareas</router-link></li>
      <li><router-link to="/Registro">Registrar</router-link></li>
    </ul>
  </div>
</template>

<script></script>

<style>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
</style>
