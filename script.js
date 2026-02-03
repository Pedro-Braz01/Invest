document.addEventListener("DOMContentLoaded", () => {

  const totalEl = document.getElementById("total");
  const canvas = document.getElementById("graficoPrincipal");

  if (!canvas) {
    console.error("Canvas não encontrado");
    return;
  }

  const dados = [1000, 1250, 1500, 1850, 2200];
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai"];

  totalEl.textContent = "R$ " + dados[dados.length - 1].toLocaleString("pt-BR");

  new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Evolução do Capital",
        data: dados,
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(0,212,170,.15)",
        borderColor: "#00d4aa",
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#e2e4ea"
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#7a7f95" },
          grid: { color: "#252838" }
        },
        y: {
          ticks: { color: "#7a7f95" },
          grid: { color: "#252838" }
        }
      }
    }
  });

});
