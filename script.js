 new Chart(document.getElementById("dispersion"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "##FF3587",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
                },
            });
			
			const detalle = {
  "Con gratuidad": {
    "3 años": [
      "Comunicación Digital Esp. Diseño de Videojuegos | UNIACC",
      "Diseño de Imagen Esp. Moda | UNIACC",
      "Diseño de Interiores y Ambientes | UNIACC",
      "Diseño Gráfico Esp. Multimedia | UNIACC"
    ],
    "4 años": [
      "Diseño en Comunicación Visual | UTEM",
      "Diseño Industrial | UTEM"
    ],
    "5 años": [
      "Bachillerato en Artes, Arquitectura y Diseño | U. Finis Terrae",
      "Ingeniería en Realidad Virtual y Diseño de Juegos Digitales | U. Bernardo O'Higgins",
      "Diseño | U. de Las Américas",
      "Diseño de Moda y Management | U. Finis Terrae",
      "Diseño Gráfico Mención Diseño Estratégico | U. de Antofagasta",
      "Diseño | U. Católica de Temuco",
      "Diseño | U. de La Serena",
      "Diseño | U. de Playa Ancha",
      "Diseño | U. del Bío-Bío",
      "Diseño Mención Industrial/Gráfico/Ambientes | U. Mayor"
    ],
    "6 años": [
      "Diseño | U. Austral de Chile",
      "Ingeniería en Diseño de Productos | U. T. Federico Santa María (sede 1)",
      "Ingeniería en Diseño de Productos | U. T. Federico Santa María (sede 2)",
      "Ingeniería en Fabricación y Diseño Industrial | U. T. Federico Santa María",
      "Diseño | U. de Talca",
      "Diseño | U. de Valparaíso",
      "Diseño | U. de Viña del Mar",
      "Diseño Multimedia | U. de Tarapacá"
    ],
    "7 años": [
      "Diseño en Comunicación Visual | U. de Santiago de Chile",
      "Diseño Industrial | U. de Santiago de Chile",
      "Diseño | U. de Chile",
      "Diseño | Pontificia U. Católica de Chile",
      "Diseño | Pontificia U. Católica de Valparaíso",
      "Diseño Teatral | U. de Chile"
    ]
  },
  "Sin gratuidad": {
    "3 años": [],
    "4 años": [
      "Diseño de Experiencias Inmersivas y Videojuegos | U. Gabriela Mistral",
      "Diseño de Videojuegos | U. Gabriela Mistral",
      "Diseño en Animación Digital | U. Gabriela Mistral",
      "Diseño en Interacción Digital | U. Gabriela Mistral",
      "Diseño en Marketing Digital | U. Gabriela Mistral",
      "Diseño | U. de Viña del Mar"
    ],
    "5 años": [
      "Diseño Gráfico | U. del Bío-Bío",
      "Diseño Industrial | U. del Bío-Bío"
    ],
    "6 años": [
      "Bachillerato en Diseño | U. del Desarrollo",
      "Diseño | U. del Desarrollo",
      "Diseño | U. Diego Portales",
      "Diseño de Juegos Digitales | U. Andrés Bello (sede 1)",
      "Diseño de Juegos Digitales | U. Andrés Bello (sede 2)",
      "Diseño de Vestuario y Textil | U. Andrés Bello",
      "Diseño Gráfico | U. Andrés Bello",
      "Ingeniería en Diseño | U. Adolfo Ibáñez"
    ],
    "7 años": []
  }
};

new Chart(document.getElementById("apiladas"), {
  type: "bar",
  data: {
    labels: ["3 años", "4 años", "5 años", "6 años", "7 años"],
    datasets: [
      {
        label: "Con gratuidad",
        data: [4, 2, 10, 8, 6],
        borderWidth: 1,
        backgroundColor: "#FF3587"
      },
      {
        label: "Sin gratuidad",
        data: [0, 6, 2, 8, 0],
        borderWidth: 1,
        backgroundColor: "#3ED5A9"
      }
    ]
  },
  options: {
    scales: {
      x: { stacked: true },
      y: { beginAtZero: true, stacked: true }
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
          boxWidth: 12,
          boxHeight: 12,
          padding: 20,
          font: { size: 12 },
          generateLabels: function(chart) {
            return [
              {
                text: "Con gratuidad",
                fillStyle: "#FF3587",
                strokeStyle: "#FF3587",
                pointStyle: "rect"
              },
              {
                text: "Sin gratuidad",
                fillStyle: "#3ED5A9",
                strokeStyle: "#3ED5A9",
                pointStyle: "rect"
              }
            ];
          }
        }
      },
      tooltip: {
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        titleColor: "#111",
        bodyColor: "#555",
        titleFont: { size: 12, weight: "600" },
        bodyFont: { size: 11 },
        padding: 10,
        callbacks: {
          title: function(items) {
            const item = items[0];
            const count = item.raw;
            return item.dataset.label + " — " + item.label + " (" + count + (count === 1 ? " carrera)" : " carreras)");
          },
          label: function(context) {
            const lista = detalle[context.dataset.label][context.label];
            if (!lista || lista.length === 0) return "Sin carreras en esta categoría";
            return lista.map(c => "· " + c);
          }
        }
      }
    }
  }
});
