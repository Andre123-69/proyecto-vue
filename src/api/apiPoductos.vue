<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);  // Estado reactivo para almacenar los datos recibidos
const token = "tu_token_aqui";  // El token que recibiste para autenticación
const url = "http://localhost:8000/api/v1/endpoint";  // URL del endpoint del backend

// Función para hacer la petición al backend con token en headers
async function fetchData() {
  try {
    const response = await fetch(url, {
      method: 'GET',  // Cambiar a POST si tu backend lo requiere
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Enviar token en Authorization
      },
    });

    if (!response.ok) throw new Error(`Error en la respuesta: ${response.status}`);

    const data = await response.json();  // Parsear JSON recibido
    items.value = data;  // Guardar los datos en el estado reactivo
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

// Ejecutar la petición cuando el componente se monte
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <h2>Datos recibidos desde backend</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
