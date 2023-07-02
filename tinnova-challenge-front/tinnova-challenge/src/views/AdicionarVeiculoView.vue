<template>
    <main>
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
        :rules="[(value) => (value >= 1886 && value <= new Date().getFullYear()) || 'Insira um ano válido!',(value) => (value && value.length > 0) || 'Ano é obrigatório' ]"
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
  
      <!-- <va-button :disabled="!isValid" @click="validate() && submit()">
        Cadastrar
      </va-button> -->
  
      <va-button :disabled="!isValid"  @click="submit()">
        Cadastrar
      </va-button>
    </va-form>
    </main>
  </template>
  
  <script>
  
  import { reactive, onMounted, ref } from 'vue';
  import { useForm } from 'vuestic-ui'
  import MarcasService from '../services/MarcasService'
  import VeiculosService from '../services/VeiculosService'
  import router from "@/router";
  
  // const { isValid, validate, reset, resetValidation } = useForm('formRef')
  const { validate, reset, resetValidation } = useForm('formRef')
  
    // const form = reactive({
    //   veiculo: '',
    //   marca: '',
    //   cor: '',
    //   ano: '',
    //   descricao: '',
    //   vendido: false,
    // })
  
    const isValid = ref(false)
    const veiculo = ref();
    const marca = ref();
    const cor = ref();
    const ano = ref();
    const descricao = ref();
    const vendido = ref(false);
  
    const marcas = ref([])
  
    const submit = async () => {
      
      const novoVeiculo = {
        veiculo: veiculo.value,
        marca: marca.value.value,
        cor: cor.value,
        ano: ano.value,
        descricao: descricao.value,
        vendido: vendido.value,
      }
  
      const { status } = await VeiculosService.create(novoVeiculo)
      if (status === 200) {
        // veiculo.value = ''
        // marca.value = ''
        // cor.value = ''
        // ano.value = ''
        // descricao.value = ''
        // vendido.value = ''
        router.push("/carros")
      }
  
      // console.log(response)
    }
  
    const isNumeric = (str) => {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
      }
  
    const validateForm = () => {
      if(!isNumeric(ano.value)) return isValid.value = false
      if(ano.value.length !== 4) return isValid.value = false
      if(ano.value > new Date().getFullYear()) return isValid.value = false
      if (typeof(Number(ano.value)) !== 'number') return isValid.value = false
  
      if (!veiculo.value || !marca.value || !ano.value || !cor.value) return isValid.value = false
      else isValid.value = true
    }
  
    const fetchMarcas = async () => {
        const { data } = await MarcasService.getAll()
        if (!data) return 
        marcas.value = data.map((el) => {
          return { value: el.id, text: el.nome}
        })
      }
  
      export default {
       components: {
  
       },
       data() {
        isValid
         return {
          // form,
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
          validateForm
         }
     
       },
       methods: {
    },
       watch: {
         form: {
           // eslint-disable-next-line vue/no-arrow-functions-in-watch
           handler: () => {
             validateForm()
           },
          //  immediate: true,
         },
         veiculo: {
           // eslint-disable-next-line vue/no-arrow-functions-in-watch
           handler: () => {
             validateForm()
           },
          //  immediate: true,
         },
         marca: {
           // eslint-disable-next-line vue/no-arrow-functions-in-watch
           handler: () => {
             validateForm()
           },
          //  immediate: true,
         },
         ano: {
           // eslint-disable-next-line vue/no-arrow-functions-in-watch
           handler: () => {
             validateForm()
           },
          //  immediate: true,
         },
         cor: {
           // eslint-disable-next-line vue/no-arrow-functions-in-watch
           handler: () => {
             validateForm()
           },
          //  immediate: true,
         },
  
       },
       
       setup() {
         onMounted(() => {
          fetchMarcas()
           
         })
       }
   }
  </script>
  
  
  <style scoped>
  main {
      height: 85vh;
      padding: 40px;
      display: flex;
      flex-direction: column;
  }
  
  #form-carro {
    width: 400px;
    display:flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>