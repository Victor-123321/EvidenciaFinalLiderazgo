const womenTechnicalRolesChart = new Chart(document.getElementById('womenTechnicalRolesChart'), {
  type: 'bar',
  data: {
    labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
    datasets: [{
      label: '% Mujeres en Roles Técnicos',
      data: [20, 25, 30, 35],
      backgroundColor: ['#1E3A8A', '#3B82F6', '#60A5FA', '#93C5FD'],
      borderColor: ['#1E3A8A', '#3B82F6', '#60A5FA', '#93C5FD'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: { display: true, text: 'Porcentaje (%)' }
      },
      x: { title: { display: true, text: 'Quarter' } }
    },
    plugins: {
      legend: { display: true },
      title: { display: true, text: '% Mujeres en Roles Técnicos' }
    }
  }
});

const inclusiveEnvironmentChart = new Chart(document.getElementById('inclusiveEnvironmentChart'), {
  type: 'pie',
  data: {
    labels: ['Inclusivo', 'Neutral', 'No Inclusivo'],
    datasets: [{
      data: [75, 20, 5],
      backgroundColor: ['#10B981', '#FBBF24', '#EF4444'],
      borderColor: ['#064E3B', '#B45309', '#991B1B'],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: '% Empleados Reportando un Entorno Inclusivo' }
    }
  }
});

const deiTrainingHoursChart = new Chart(document.getElementById('deiTrainingHoursChart'), {
  type: 'bar',
  data: {
    labels: ['2023', '2024', '2025'],
    datasets: [{
      label: 'Prom. Horas de Entrenamiento DEI',
      data: [4, 6, 8],
      backgroundColor: ['#6B7280', '#8B5CF6', '#A78BFA'],
      borderColor: ['#6B7280', '#8B5CF6', '#A78BFA'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Horas por Empleado' }
      },
      x: { title: { display: true, text: 'Año' } }
    },
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Promedio de Horas de Entrenamiento DEI' }
    }
  }
});

const inclusiveJobPostingsChart = new Chart(document.getElementById('inclusiveJobPostingsChart'), {
  type: 'line',
  data: {
    labels: ['Enero 2025', 'Febrero 2025', 'Marzo 2025', 'Abril 2025'],
    datasets: [{
      label: '% Ofertas de Empleo Inclusivas',
      data: [80, 85, 90, 95],
      backgroundColor: '#2DD4BF',
      borderColor: '#0D9488',
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: { display: true, text: 'Porcentaje (%)' }
      },
      x: { title: { display: true, text: 'Mes' } }
    },
    plugins: {
      legend: { display: true },
      title: { display: true, text: '% Ofertas de Empleo con Lenguaje Inclusivo' }
    }
  }
});

const accessibilityRequestsChart = new Chart(document.getElementById('accessibilityRequestsChart'), {
  type: 'doughnut',
  data: {
    labels: ['Concedidas', 'Pendientes', 'Denegadas'],
    datasets: [{
      data: [90, 8, 2],
      backgroundColor: ['#3B82F6', '#F97316', '#6B7280'],
      borderColor: ['#1E3A8A', '#C2410C', '#4B5563'],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: '% Peticiones de Accesibilidad Concedidas' }
    }
  }
});