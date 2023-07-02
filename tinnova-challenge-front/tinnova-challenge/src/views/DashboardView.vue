<template>
    <div class="about">
        <div id="chart" v-if="showChart">
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
        <p>{{ chartData }}</p>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { useAnotacaoStore } from '@/stores/anotacao';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref();
const chartOptions = ref({
    responsive: true
});
const showChart = ref(false);
// const store = useAnotacaoStore();

async function atualizar() {
    showChart.value = false;
    // await store.getChartData();
    // chartData.value = store.chartData;
    // showChart.value = true;
}

onMounted(() => {
    atualizar();
});

</script>