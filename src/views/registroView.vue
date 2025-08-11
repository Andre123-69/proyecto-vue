<template>
  <div>
    <h2>Formulario de Registros</h2>
    <Form action="">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" placeholder="Ingrese nombre" />

      <label for="email">Email:</label>
      <input type="text" id="email" placeholder="Ingrese email" />

      <button type="submit">Registrar</button>
    </Form>
  </div>
</template>
<script setup>
import { Form } from "vee-validate";
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
