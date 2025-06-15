const url = "data/plants.json";

async function getPlants() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPlants(data);
    return data;
  } catch (error) {
    console.error("Error fetching plants:", error);
    return [];
  }
}

function displayPlants(plants) {
  const cardsContainer = document.getElementById("plantCards");
  cardsContainer.innerHTML = "";

  plants.forEach((plant, index) => {
    const card = document.createElement("section");
    card.classList.add("plant-card");
    card.innerHTML = `
        <h2>${plant.name}</h2>
        <img src="${plant.image}" alt="${plant.name}">
        <button class="learn-more" data-index="${index}">Information</button>
    `;
    cardsContainer.appendChild(card);
  });

  document.querySelectorAll(".learn-more").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      showModal(plants[index]);
    });
  });
}

function showModal(plant) {
  const modal = document.getElementById("plantModal");

  document.getElementById("modal-title").textContent = plant.name;
  document.getElementById("modal-image").src = plant.image;
  document.getElementById("modal-image").alt = plant.name;
  document.getElementById("modal-category").textContent = plant.category;
  document.getElementById("modal-sun").textContent = plant.sun;
  document.getElementById("modal-water").textContent = plant.water;

  modal.showModal();

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.close();
  });
}

export { getPlants, displayPlants };
