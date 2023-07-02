<template>
  <div class="main-container">
    <div class="cards">
      <div class="card-container">
        <va-card color="primary" gradient>
          <va-card-title>Total de veículos não vendidos</va-card-title>
          <va-card-content class="card-content">
            {{ totalNotSold }}
          </va-card-content>
        </va-card>
      </div>

      <div class="card-container">
        <va-card color="primary" gradient>
          <va-card-title
            >Total de veículos registrados na última semana</va-card-title
          >
          <va-card-content class="card-content">
            {{ totalCreatedLastWeek }}
          </va-card-content>
        </va-card>
      </div>
    </div>

      <div id="chart-decades" v-if="showChart">
        <Bar
          id="my-chart-id"
          :options="chartDecadeOptions"
          :data="chartDecadeData"
        />
      </div>

      <div id="chart-brands" v-if="showChart">
        <Bar
          id="my-chart-id-b"
          :options="chartBrandsOptions"
          :data="chartBrandsData"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import VeiculosService from "../services/VeiculosService";
import MarcasService from "../services/MarcasService";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const showChart = ref(true);
const brands = ref();
const totalNotSold = ref();
const totalCreatedLastWeek = ref();

const chartDecadeData: any = ref({
  labels: [],
  datasets: [
    {
      label: "Distribuição de veículos por década de criação",
      backgroundColor: "hsl(316, 64%, 35%)",
      data: [],
    },
  ],
});

const chartDecadeOptions = {
  responsive: true,
  //   maintainAspectRatio: false,
};

const chartBrandsData: any = ref({
  labels: [],
  datasets: [
    {
      label: "Distribuição de veículos por fabricante",
      backgroundColor: "hsl(316, 64%, 35%)",
      data: [],
    },
  ],
});

const chartBrandsOptions = {
  responsive: true,
  //   maintainAspectRatio: false,
};

const setChartDecadeData = (data: any) => {
  let labels: any[] = [];
  let counts: any = {};

  data.forEach((el: any) => {
    let ano = el.ano;
    ano = Number(ano.slice(0, 3) + "0");

    if (!counts[ano]) {
      counts[ano] = 1;
    } else {
      counts[ano]++;
    }

    if (!labels.includes(ano)) {
      labels.push(ano);
    }
  });

  labels.sort();
  let datasetData = labels.map((el: any) => counts[el]);
  chartDecadeData.value = {
    labels: labels,
    datasets: [
      {
        label: "Distribuição de veículos por década de criação",
        backgroundColor: "hsl(316, 64%, 35%)",
        data: datasetData,
      },
    ],
  };
};

const setChartBrandsData = (data: any) => {
  let labels: any[] = [];
  let counts: any = {};

  data.forEach((el: any) => {
    let marca = el.marca.nome;

    if (!counts[marca]) {
      counts[marca] = 1;
    } else {
      counts[marca]++;
    }

    if (!labels.includes(marca)) {
      labels.push(marca);
    }
  });

  //   labels.sort();
  let datasetData = labels.map((el: any) => counts[el]);
  chartBrandsData.value = {
    labels: labels,
    datasets: [
      {
        label: "Distribuição de veículos por fabricante",
        backgroundColor: "hsl(316, 64%, 35%)",
        data: datasetData,
      },
    ],
  };
};

const setTotalNotSold = (data: any) => {
  let count = 0;
  data.forEach((el: any) => {
    if (!el.vendido) count++;
  });
  totalNotSold.value = count;
};

const setTotalCreatedLastWeek = (data: any) => {
  var sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
  let count = 0;
  data.forEach((el: any) => {
    if (new Date(el.criado) >= sevenDaysAgo) count++;
  });
  totalCreatedLastWeek.value = count;
};

async function atualizar() {
  showChart.value = true;
  const response = await VeiculosService.getAll();
  setTotalCreatedLastWeek(response.data);
  setTotalNotSold(response.data);
  setChartDecadeData(response.data);
  setChartBrandsData(response.data);
}

async function fetchBrands() {
  const { data } = await MarcasService.getAll();
  if (!data) return;
  brands.value = data;
}

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartDecadeData,
      chartDecadeOptions,
      chartBrandsData,
      chartBrandsOptions,
      totalNotSold,
      totalCreatedLastWeek,
      showChart,
    };
  },
  methods: {},
  watch: {},

  setup() {
    onMounted(() => {
      fetchBrands();
      atualizar();
    });
  },
};
</script>

<style scoped>
.main-container {
  height: 100vh;
  padding: 50px 50px 50px 0px;
}

.cards {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}
.card-container {
  width: 300px;
}

.card-content {
  font-size: 80px;
}

.charts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#chart-decades {
  margin: 50px 50px 50px 0px;
  height: 400px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#chart-brands {
  margin: 50px 50px 50px 0px;
  height: 400px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
