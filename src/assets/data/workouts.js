const workouts = {
  torsoPierna: {
    workoutTableData: {
      titlesList: [
        "Ejercicio",
        "Series-Rep",
        "Descanso",
        "Peso",
      ],
      weightColumnColespan: 4,
      exercises: [
        {
          imgSrc: require('./../img/Back+Lats/image--007.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "5 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular"
        ]
      },
      {
        title: "🤸 Después del entrenamiento:",
        listItems: [
          "Estiramientos de cada grupo muscular durante 8-10 minutos"
        ]
      }
    ]
  }
}

  export default workouts;