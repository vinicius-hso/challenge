<template>
  <main>
    <div class="form-container">
      <div class="my-8">
        <va-divider />
      </div>
      <va-form id="form-carro" class="flex flex-col gap-6" ref="formRef">
        <va-input
          v-model="veiculo"
          :rules="[(v) => !!v || 'Veículo é obrigatório']"
          label="Veículo"
        />

        <va-select
          v-model="marca"
          :options="marcas"
          :rules="[(v) => !!v || 'Marca é obrigatório']"
          label="Marca"
        />

        <va-input
          v-model="cor"
          :rules="[(v) => !!v || 'Cor é obrigatório']"
          label="Cor"
        />

        <va-input
          v-model="ano"
          label="Ano"
          :rules="[
            (value) =>
              (value >= 1886 && value <= new Date().getFullYear()) ||
              'Insira um ano válido!',
            (value) => (value && value.length > 0) || 'Ano é obrigatório',
          ]"
          pattern="\d{4,4}"
          inputmode="numeric"
          minlength="4"
          maxlength="4"
        />

        <va-input
          v-model="descricao"
          class="mb-6"
          type="textarea"
          label="Descrição"
        />

        <va-checkbox
          v-model="vendido"
          class="mb-6"
          color="primary"
          label="Vendido"
        />

        <va-button :disabled="!isValid" @click="submit()">
          Cadastrar
        </va-button>
      </va-form>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useForm } from "vuestic-ui";
import MarcasService from "../services/MarcasService";
import VeiculosService from "../services/VeiculosService";
import router from "@/router";

const { validate, reset, resetValidation } = useForm("formRef");

const isValid = ref(false);
const veiculo = ref();
const marca = ref();
const cor = ref();
const ano = ref();
const descricao = ref();
const vendido = ref(false);

const marcas = ref([]);

const submit = async () => {
  const novoVeiculo = {
    veiculo: veiculo.value,
    marca: marca.value.value,
    cor: cor.value,
    ano: ano.value,
    descricao: descricao.value,
    vendido: vendido.value,
  };

  const { status } = await VeiculosService.create(novoVeiculo);
  if (status === 200) {
    resetForm();
    router.push("/veiculos");
  }
};

const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const validateForm = () => {
  if (!isNumeric(ano.value)) return (isValid.value = false);
  if (ano.value.length !== 4) return (isValid.value = false);
  if (ano.value > new Date().getFullYear()) return (isValid.value = false);
  if (typeof Number(ano.value) !== "number") return (isValid.value = false);

  if (!veiculo.value || !marca.value || !ano.value || !cor.value)
    return (isValid.value = false);
  else isValid.value = true;
};

const fetchMarcas = async () => {
  const { data } = await MarcasService.getAll();
  if (!data) return;
  marcas.value = data.map((el) => {
    return { value: el.id, text: el.nome };
  });
};

const resetForm = () => {
  veiculo.value = undefined;
  marca.value = undefined;
  cor.value = undefined;
  ano.value = undefined;
  descricao.value = undefined;
  vendido.value = undefined;
};

export default {
  components: {},
  data() {
    isValid;
    return {
      veiculo,
      marca,
      cor,
      ano,
      descricao,
      vendido,
      marcas,
      isValid,
      validate,
      reset,
      resetValidation,
      submit,
      validateForm,
      resetForm,
    };
  },
  methods: {},
  watch: {
    form: {
      // eslint-disable-next-line vue/no-arrow-functions-in-watch
      handler: () => {
        validateForm();
      },
    },
    veiculo: {
      // eslint-disable-next-line vue/no-arrow-functions-in-watch
      handler: () => {
        validateForm();
      },
    },
    marca: {
      // eslint-disable-next-line vue/no-arrow-functions-in-watch
      handler: () => {
        validateForm();
      },
    },
    ano: {
      // eslint-disable-next-line vue/no-arrow-functions-in-watch
      handler: () => {
        validateForm();
      },
    },
    cor: {
      // eslint-disable-next-line vue/no-arrow-functions-in-watch
      handler: () => {
        validateForm();
      },
    },
  },

  setup() {
    onMounted(() => {
      fetchMarcas();
    });
  },
};
</script>

<style scoped>
main {
  height: 85vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.form-container {
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  margin: 100px;
}

#form-carro {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
