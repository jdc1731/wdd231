
let pointsOfInterest = [];

fetch("data/interests.json")
  .then((response) => response.json())
  .then((data) => {
    pointsOfInterest = data;
    populateCards();
    setupModalListeners();
  })
  .catch((error) => console.error("Error loading points of interest:", error));

function populateCards() {
  const container = document.getElementById("interestCardsContainer");
  container.innerHTML = "";

  pointsOfInterest.forEach((point, index) => {
    const card = document.createElement("div");
    card.classList.add("interest-card");

    card.innerHTML = `
    <img src="${point.image}" alt="${point.name}">
    <figcaption>${point.caption}</figcaption>
    <h2>${point.name}</h2>
    <p>${point.address}</p>
    <figcaption>${point.fig}</figcaption>
    <button class="learn-more-btn" data-id="${index}">Learn More</button>
  `;
  

    container.appendChild(card);
  });
}

function setupModalListeners() {
  const modal = document.getElementById("pointModal");
  const closeModal = document.getElementById("closeModal");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("learn-more-btn")) {
      const id = e.target.dataset.id;
      showModal(id);
    }
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });
}

function showModal(id) {
  const point = pointsOfInterest[id];
  if (point) {
    document.getElementById("modalTitle").textContent = point.name;
      document.getElementById("modalDescription").textContent = point.description;
      document.getElementById("modalAddress").textContent = point.address;
    document.getElementById("pointModal").showModal();
  }
}

export { populateCards, setupModalListeners };