const ctx = document.getElementById("myChart")
const names = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto']
const monto = [80, 55, 75, 50, 60, 63, 65, 30]

const myChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: names,
        datasets: [{
            label: 'Gastos',
            data: monto,
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(60, 19, 20, 0.2)',
                'rgba(10, 255, 80, 0.2)'
            ],
            boderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(60, 19, 20, 1)',
                'rgba(10, 255, 80, 1)'
            ],
            borderWidth: 2
        }]
    }
})