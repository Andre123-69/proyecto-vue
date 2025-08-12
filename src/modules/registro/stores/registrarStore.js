import { defineStore } from "pinia";
import { ref } from "vue";

const useRegistrarStore = defineStore("registrar", () => {
  const nombre = ref("");
  const email = ref("");
  const guardarregistro = (nombreFormulario, emailFormulario) => {
    email.value = emailFormulario;
    nombre.value = nombreFormulario;
  };

  return {
    nombre,
    email,
    guardarregistro,
  };
});
export default useRegistrarStore;
