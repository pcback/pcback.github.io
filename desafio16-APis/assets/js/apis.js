
const inputMoneda = document.getElementById(clp);
const selectMoneda = document.getElementById(monedaCambio);
const botonBusqueda = document.getElementById(Busqueda);
const actualizaParrafo = document.getElementById(parrafo);



// const dato = document.querySelector("#dinero").value;
// const monedaConversion = document.querySelector("#monedaCambio").value;

Busqueda.addEventListener("click",()=> {
    // clp + monedaCambio + Busqueda
    const clickClp = clp.value;
    const clickmonedaCambio = monedaCambio.value;
    obtenerCambio(clickmonedaCambio);
    

})

const urlApi = "https://mindicador.cl/api/";
var myChart;

async function obtenerCambio(clickMoneda){
  try{
    console.log('moneda: ',clickMoneda)
    const res = await fetch(urlApi + clickMoneda );
    const data = await res.json();
    console.log('data: ',data['serie'])
    //const {serie} = data;
    const serie = data['serie'];
    
    // data grafico
    const datos = crearData(serie.slice(0,10).reverse());
    console.log('datos: ',datos)
       // Actualizar grafico
    actualizarGrafico(datos);
  } 
  catch (error) {
    console.log("fallo al cargar");
    console.log(error);
  }
    
}


// render grafico

function actualizarGrafico (datamonedas){
  console.log('datamonedas1 ', datamonedas.labels)
  console.log('datamonedas2 ', datamonedas.dataSets[0].data)
  const data = {
    labels: datamonedas.labels,
    datasets: [{
      label: 'My First Dataset',
      data: datamonedas.dataSets[0].data,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  const config = {
    type:"line",
    data
  };
  // console.log(data)
  const chartDOM = document.getElementById("myChart");
  chartDOM.style.backgroundColor = "white";
   
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(chartDOM, config);

}







function crearData(serie) {
 const labels = serie.map(({fecha}) => modificarFecha(fecha));
 const valorMap = serie.map(({valor}) => valor);
 console.log(valorMap);
 const dataSets = [{
    label: "Historial",
    borderColor: "rgb (75, 192, 192)",
    data: valorMap,
 }] 
  return {labels, dataSets};
};

function modificarFecha(fecha){
    date = new Date (fecha);
    const año = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();
    return `${año}-${mes}-${dia}`;

}
   










// GRAFICO

// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });