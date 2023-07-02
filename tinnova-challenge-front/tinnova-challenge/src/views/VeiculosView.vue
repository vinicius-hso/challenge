<template>
    <main>
      <va-data-table
      class="table-crud"
      :items="veiculos"
      :columns="columns"
      striped
    >
      <template #cell(acoes)="{ rowIndex }">
        <va-button
          preset="plain"
          icon="edit"
          @click="openModalToEditItemById(rowIndex)"
        />
        <va-button
          preset="plain"
          icon="delete"
          class="ml-3"
          @click="deleteItemById(rowIndex)"
        />
      </template>
    </va-data-table>
  
    <va-modal
      class="modal-crud"
      :model-value="!!editedItem"
      
      title="Editar veículo"
      size="large"
      @ok="editItem"
      @cancel="resetEditedItem"
      no-dismiss
    >

      <!-- <va-form id="form-carro" class="flex flex-col gap-6" ref="formRef">
      <va-input
        v-model="editedItem.veiculo"
        :rules="[(value) => (value && value.length > 0) || 'Veículo é obrigatório']"
        label="Veículo"
      />
  
      <va-select
        v-model="editedItem.marca"
        :options="marcas"
        :rules="[(v) => !!v || 'Marca é obrigatório']"
        label="Marca"
      />
  
        <va-input
        v-model="editedItem.ano"
        label="Ano"
        :rules="[(value) => (value >= 1886 && value <= new Date().getFullYear()) || 'Insira um ano válido!',(value) => (value && value.length > 0) || 'Ano é obrigatório' ]"
        pattern="\d{4,4}"
        inputmode="numeric"
        minlength="4"
        maxlength="4"
      />
  
       <va-input
        v-model="editedItem.descricao"
        class="mb-6"
        type="textarea"
        label="Descrição"
      />
  
     <va-checkbox
        v-model="editedItem.vendido"
        class="mb-6"
        color="primary"
        label="Vendido"
      />
     
    </va-form> -->

    <va-form id="form-carro" class="flex flex-col gap-6" ref="formRef">
      <va-input
        v-model="veiculo"
        :rules="[(value) => (value && value.length > 0) || 'Veículo é obrigatório']"
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
        :rules="[(value) => (value && value.length > 0) || 'Cor é obrigatório']"
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
        Salvar
      </va-button> -->
    </va-form>
    </va-modal>
    </main>
  </template>
  
  <script>
  import { defineComponent, reactive, ref, onMounted } from "vue";
  import { useForm } from 'vuestic-ui'
  import VeiculosService from '../services/VeiculosService.ts'
  import MarcasService from '../services/MarcasService.ts'
  
  const { isValid, validate, reset, resetValidation } = useForm('formRef')
  
  const form = reactive({
      veiculo: '',
    //   marca: '',
        marca: { value: "", text: ""},
      ano: '',
      descricao: '',
      vendido: false,
    })
  
  const defaultItem = {
    veiculo: "",
    marca: { value: "", text: ""},
    ano: "",
    descricao: "",
    cor: "",
    vendido: "",
    criado: "",
    atualizado: ""
  };
  
  const marcas = ref([])
  const veiculos = ref([])
  const veiculo = ref()
  const marca = ref()
  const cor = ref()
  const ano = ref()
  const descricao = ref()
  const vendido = ref()

// :model-value="!!editedItem"

// @click="openModalToEditItemById(rowIndex)"

const isNumeric = (str) => {
        if (typeof str != "string") return false 
        return !isNaN(str) && !isNaN(parseFloat(str))
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
  
      const fetchVeiculos = async () => {
        const { data } = await VeiculosService.getAll()
        if (!data) return 
        veiculos.value = data.map((el) => {
          el.marca = el.marca.nome
          return el
        })
      }
  
  export default defineComponent({
    data() {  
      const columns = [
        { key: "veiculo", sortable: true },
        { key: "marca", sortable: true },
        { key: "cor", sortable: true },
        { key: "ano", sortable: true },
        { key: "descricao", width: 200 },
        { key: "vendido", sortable: true },
        { key: "criado", sortable: true },
        { key: "atualizado", sortable: true },
         { key: "acoes", width: 80 },
      ];
  
      return {
        form,
        veiculos,
        columns,
        marcas,
        editedItemId: null,
        editedItem: null,
        createdItem: { ...defaultItem },
        isValid, 
        validate, 
        reset, 
        resetValidation,
        showModal: false,
        veiculo,
        marca,
        cor,
        ano,
        descricao,
        vendido,
        validateForm
      };
    },
  
    computed: {
      isNewData() {
        return Object.keys(this.createdItem).every(
          (key) => !!this.createdItem[key]
        );
      },
    },
  
    methods: {
      resetEditedItem() {
        this.editedItem = null;
        this.editedItemId = null;
      },
      resetCreatedItem() {
        this.createdItem = { ...defaultItem };
      },
      async deleteItemById(idx) {
        const id = veiculos.value[idx].id
        const { status } = await VeiculosService.delete(id)
        if (status === 200) this.veiculos = [...this.veiculos.slice(0, idx), ...this.veiculos.slice(idx + 1)];
      },
      // addNewItem() {
      //   this.veiculos = [...this.veiculos, { ...this.createdItem }];
      //   this.resetCreatedItem();
      // },
      async editItem() {
          if (!isValid) return

        let veiculoToUpdate = {
            id: this.editedItem.id,
            veiculo: this.veiculo,
            marca: this.marca.value,
            cor: this.cor,
            ano: this.ano,
            descricao: this.descricao,
            vendido: this.vendido,
        }


        const { status } = await VeiculosService.update(veiculoToUpdate)
        if (status !== 200) return
        veiculoToUpdate.marca = this.marca.text || this.editedItem.marca
        veiculoToUpdate.criado = this.editedItem.criado
        veiculoToUpdate.atualizado = this.editedItem.atualizado

        this.veiculos = [
          ...this.veiculos.slice(0, this.editedItemId),
          { ...veiculoToUpdate },
          ...this.veiculos.slice(this.editedItemId + 1),
        ];
        this.resetEditedItem();
      },
      openModalToEditItemById(id) {
        console.log(id)

        this.veiculo = veiculos.value[id].veiculo
        this.marca = veiculos.value[id].marca
        this.cor = veiculos.value[id].cor
        this.ano = veiculos.value[id].ano
        this.descricao = veiculos.value[id].descricao
        this.vendido = veiculos.value[id].vendido

        this.showModal = true
        this.editedItemId = id;

        this.editItem.marca = this.marcas.find((el) => el.nome === this.editItem.marca)
        this.editedItem = { ...this.veiculos[id] };

      },
    },

    watch: {
         form: {
           // eslint-disable-next-line vue/no-arrow-functions-in-watch
           handler: () => {
             console.log(form)
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
          fetchVeiculos()
           
         })
       }
  });
  </script>
  
  <style scoped>
  main {
      height: 85vh;
      padding: 40px;
  }
  
  .va-form {
    display: flex !important;
    flex-direction: column !important;
    width:500px;
    gap: 20px;
  }
  </style>