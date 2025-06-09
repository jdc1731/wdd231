let membershipDetails = [];

fetch("data/membership-levels.json")
  .then((response) => response.json())
  .then((data) => {
    membershipDetails = data;
    populateCards();
    setupModalListeners();
  })
  .catch((error) => console.error("Error loading membership levels:", error));

function populateCards() {
  const container = document.getElementById("membershipCardsContainer");
  container.innerHTML = "";

  membershipDetails.forEach((level) => {
    const card = document.createElement("div");
    card.classList.add("membership-card");

    card.innerHTML = `
      <h3>${level.name}</h3>
      <button type="button" class="learn-more-btn" data-id="${level.id}">
        Learn More
      </button>
    `;

    container.appendChild(card);
  });
}

function setupModalListeners() {
  const modal = document.getElementById("membershipModal");
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
  const membership = membershipDetails.find((m) => m.id === id);
  if (membership) {
    document.getElementById("modalTitle").textContent = membership.name;
    document.getElementById("modalDescription").textContent =
      membership.description;
    document.getElementById("modalBenefits").textContent = membership.benefits;
    document.getElementById("modalCost").textContent = membership.cost;
    document.getElementById("membershipModal").showModal();
  }
}

export { populateCards, setupModalListeners };
