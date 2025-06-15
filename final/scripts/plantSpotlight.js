const spotlightURL = "data/plants.json";

async function displaySpotlights() {
  try {
    const response = await fetch(spotlightURL);
    const plants = await response.json();

    // Shuffle the array
    const shuffled = plants.sort(() => 0.5 - Math.random());

    // Get 3 random plants
    const selected = shuffled.slice(0, 3);

    // Select the container
    const container = document.querySelector(".spotlight-container");
    if (!container) return; // ✅ Fixes crash on pages without spotlights
    container.innerHTML = "";

    selected.forEach((plant) => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
    <h3>${plant.name}</h3>
    <img src="${plant.image}" alt="${plant.name}">
    <p>Category: ${plant.category}</p>
    <p>Sunlight: ${plant.sun}</p>
    <p>Watering: ${plant.water}</p>
  `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

export { displaySpotlights };
