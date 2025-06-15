
import { getPlants, displayPlants } from "./plantFacts.js";
import { filterPlants } from "./filterPlants.js";
import { updateFooterDates, setupHamburgerMenu } from "./headerFooter.js";

document.addEventListener("DOMContentLoaded", async () => {
  updateFooterDates();
  setupHamburgerMenu();

  const allPlants = await getPlants();
  displayPlants(allPlants);

  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;
      const filtered = filterPlants(type, allPlants);
      displayPlants(filtered);
    });
  });
});
