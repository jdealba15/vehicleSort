const vehicles = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    type: "sedan",
    engine: {
      type: "gas",
      cylinders: 4,
      displacement: 2.5,
      horsepower: 206
    },
    features: ["backup camera", "blind spot monitor", "lane departure warning"]
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2022,
    type: "pickup truck",
    engine: {
      type: "gas",
      cylinders: 6,
      displacement: 3.5,
      horsepower: 400
    },
    features: ["towing package", "trailer brake controller", "Apple CarPlay"]
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    type: "electric sedan",
    engine: {
      type: "electric",
      range: 405,
      horsepower: 670
    },
    features: ["autopilot", "touchscreen infotainment system", "heated seats"]
  }
];

function vehicleSort(vehicles) {
  for(let i = 0; i < vehicles.length; i++){
    if(vehicles[i].engine.horsepower<300){
      return vehicles[i];
    }
  }
}

var mdHrsePwrVh = vehicleSort(vehicles);
console.log(mdHrsePwrVh);