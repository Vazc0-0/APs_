document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado!');

    // Gráfico 1: Evolução do Número de Usuários da Internet
    const ctx = document.getElementById('grafico-internet').getContext('2d');

    if (!ctx) {
        console.error('Não foi possível obter o contexto do canvas para o gráfico 1!');
        return;
    } else {
        console.log('Contexto do canvas para o gráfico 1 obtido com sucesso:', ctx);
    }

    console.log('Inicializando o gráfico 1...');
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

    console.log('Gráfico 1 inicializado com sucesso!');

    // Gráfico 2: Práticas de Uso das TICs
    const ctx2 = document.getElementById('grafico-internet2').getContext('2d');

    if (!ctx2) {
        console.error('Não foi possível obter o contexto do canvas para o gráfico 2!');
        return;
    } else {
        console.log('Contexto do canvas para o gráfico 2 obtido com sucesso:', ctx2);
    }

    console.log('Inicializando o gráfico 2...');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Baixar filmes', 'Baixar jogos', 'Jogo online', 'Baixar músicas', 'Ler jornais', 'Assistir a vídeos', 'Música online'],
            datasets: [
                {
                    label: 'Práticas de uso das TICs (Em milhões)',
                    data: [20, 30, 40, 50, 60, 80, 90], // Dados do gráfico
                    backgroundColor: 'rgba(54, 162, 235, 0.8)', // Azul
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    borderRadius: 5,
                }
            ]
        },
        options: {
            indexAxis: 'y', // Altera o eixo para barras horizontais
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
                        text: 'Número de Usuários (Em milhões)',
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
                },
                y: {
                    title: {
                        display: true,
                        text: 'Atividades',
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
                }
            }
        }
    });

        console.log('Gráfico 2 inicializado com sucesso!');

    // Gráfico de recursos agregados
    const ctxRecursos = document.getElementById('grafico-recursos').getContext('2d');

    new Chart(ctxRecursos, {
        type: 'bar',
        data: {
            labels: [
                'Atmosfera',
                'Biosfera',
                'Hidrosfera',
                'Litosfera - Combustíveis Fósseis',
                'Litosfera - Terras',
                'Litosfera - Metais',
                'Litosfera - Minerais',
                'Litosfera - Nuclear',
                'Litosfera - Suporte',
                'Litosfera - Serviços'
            ],
            datasets: [
                {
                    label: 'seJ/m³',
                    data: [
                        5e10,    // Atmosfera
                        7e10,    // Biosfera
                        1e11,    // Hidrosfera
                        1e12,   // Litosfera - Combustíveis Fósseis
                        5e11,   // Litosfera - Terras
                        7e11,   // Litosfera - Metais
                        4e11,   // Litosfera - Minerais
                        3e11,   // Litosfera - Nuclear
                        5e10,   // Litosfera - Suporte
                        8e10    // Litosfera - Serviços
                    ],
                    backgroundColor: [
                        '#4CAF50', // Atmosfera
                        '#2196F3', // Biosfera
                        '#FFC107', // Hidrosfera
                        '#000000', // Litosfera - Combustíveis Fósseis (Preto)
                        '#FF5722', // Litosfera - Terras
                        '#E91E63', // Litosfera - Metais
                        '#9C27B0', // Litosfera - Minerais
                        '#607D8B', // Litosfera - Nuclear
                        '#9C27B0', // Litosfera - Suporte (Roxo)
                        '#FF9800'  // Litosfera - Serviços (Laranja)
                    ],
                    borderColor: '#333',
                    borderWidth: 1,
                    barThickness: 15 // Define a espessura das barras
                }
            ]
        },
        options: {
            indexAxis: 'y', // Barras horizontais
            responsive: true,
            maintainAspectRatio: false, // Permite ajustar o tamanho do gráfico
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
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'seJ/m³',
                        color: '#456789',
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
                },
                y: {
                    title: {
                        display: true,
                        text: 'Categorias de Recursos Agregados',
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
                    },
                    categoryPercentage: 0.8, // Ajusta o espaçamento entre as barras
                    barPercentage: 0.9 // Ajusta a largura relativa das barras
                }
            }
        }
    });

    console.log('Gráfico de recursos agregados ajustado com sucesso!');
});