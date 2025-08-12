<template>
  <div>
    <h2>Formulario de Registros</h2>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese nombre" />
        <ErrorMessage name="nombre" />
      </div>

      <div class="form">
        <label for="email">Email:</label>
        <Field type="text" name="email" id="email" placeholder="Ingrese email" />
        <ErrorMessage name="email" />
      </div>

      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import validationSchema from "@/modules/registro/schemas/validationSchema.js";

const onSubmit = () => {
  console.log("Formulario enviado con éxito");
};
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
