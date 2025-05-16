document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado!');

    const ctx = document.getElementById('grafico-internet').getContext('2d');

    if (!ctx) {
        console.error('Não foi possível obter o contexto do canvas!');
        return;
    } else {
        console.log('Contexto do canvas obtido com sucesso:', ctx);
    }

    console.log('Inicializando o gráfico...');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [
                {
                    type: 'bar', // Gráfico de barras
                    label: 'Número de Usuários (Bilhões)',
                    data: [15, 17, 19, 21, 23, 25, 28, 31, 34, 37, 40, 45, 50, 55, 58, 61, 65], // Mesma escala da linha
                    backgroundColor: 'rgba(54, 162, 235, 0.8)', // Azul
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    borderRadius: 5,
                },
                {
                    type: 'line', // Gráfico de linha
                    label: 'Porcentagem de Usuários da Internet (%)',
                    data: [15, 17, 19, 21, 23, 25, 28, 31, 34, 37, 40, 45, 50, 55, 58, 61, 65],
                    borderColor: 'rgba(255, 99, 132, 1)', // Vermelho
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 3,
                    tension: 0.4, // Suaviza a linha
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointHoverRadius: 8,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14,
                            family: 'Noto Sans'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#333',
                    borderWidth: 1,
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Ano',
                        color: '#333',
                        font: {
                            size: 14,
                            family: 'Noto Sans'
                        }
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Porcentagem de Usuários da Internet (%)',
                        color: '#333',
                        font: {
                            size: 14,
                            family: 'Noto Sans'
                        }
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)',
                        borderDash: [5, 5]
                    },
                    ticks: {
                        color: '#333',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    console.log('Gráfico inicializado com sucesso!');
});

console.log('Arquivo script.js carregado com sucesso!');