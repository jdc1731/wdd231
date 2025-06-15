function showModal(plant) {
  const modal = document.getElementById("plantModal");

  document.getElementById("modal-title").textContent = plant.name;
  document.getElementById("modal-image").src = plant.image;
  document.getElementById("modal-image").alt = plant.name;
  document.getElementById("modal-category").textContent = plant.category;
  document.getElementById("modal-sun").textContent = plant.sun;
  document.getElementById("modal-water").textContent = plant.water;

  modal.showModal();
}

// Add the close event listener ONCE, after DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("plantModal");
  const closeBtn = document.getElementById("closeModal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  }
});

export { showModal };
