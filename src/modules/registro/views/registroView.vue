<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Formulario de Registros</h2>
    <Form :validation-schema="validationSchema" @submit="onSubmit" class="flex flex-col w-full">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div class="flex flex-col w-full md:w-1/2">
            <label for="nombre" class="mb-1 font-semibold">Nombre:</label>
            <Field
              class="border border-gray-300 rounded p-2 w-full"
              v-model="nombre"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingrese nombre"
            />
            <ErrorMessage name="nombre" class="text-red-500 text-xs mt-1" />
          </div>

          <div class="flex flex-col w-full md:w-1/2">
            <label for="email" class="mb-1 font-semibold">Email:</label>
            <Field
              class="border border-gray-300 rounded p-2 w-full"
              v-model="email"
              type="text"
              name="email"
              id="email"
              placeholder="Ingrese email"
            />
            <ErrorMessage name="email" class="text-red-500 text-xs mt-1" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto"
          >
            Registrar 
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import validationSchema from "@/modules/registro/schemas/validationSchema.js";
import useRegistrarStore from "@/modules/registro/stores/registrarStore.js";
import { ref } from "vue";

const registrarStore = useRegistrarStore();

const nombre = ref("");
const email = ref("");

const onSubmit = () => {
  registrarStore.guardarregistro(nombre.value, email.value);
};
</script>
<style scoped></style>
