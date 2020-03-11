
var ctx = document.getElementById('myChart').getContext('2d');
//chart has a constructor that takes two things the context
//and the data
var myChart = new Chart(ctx, {
    //eza bedi a5tar type tani men 3end almaw8e3 bashoof sho alashya2 eli btet3'ayar ba3'ayerha o sho bedal thabet ba5aleeh
    //fi kteer ashya2 3ennd kelmet chart
    
    type: 'bar',
    //data is an object
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            //data howe 8emet kol 3amood
            data: [12, 19, 3, 5, 2, 3],
            //hoon alwan al3awameed
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            //had loon alboorder ta3 al3awameed
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    //option is an object and so scales ...
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
