import ReactApexChart from 'react-apexcharts';


export default function Chart({statistics}){

    const labels = Object.keys(statistics).map((label)=> `${label} minutos`)
    const series = Object.values(statistics).map((value) => parseFloat(value.percentage) || 0)


    const chartOptions = {
        series: series,
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: labels,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      };

    return (<div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="pie"
        width={380}
      />
    </div>)
}