function filterPlants(type, plants) {
    let filteredPlants;
  
    if (type === "All") {
      filteredPlants = plants;
    } else {
      filteredPlants = plants.filter((plant) => plant.category.includes(type));
    }
  
    return filteredPlants;
  }

  export { filterPlants };
  