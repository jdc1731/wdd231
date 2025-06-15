// plantmodal.js
import { getPlants, displayPlants } from "./plantFacts.js";
import { filterPlants } from "./filterPlants.js";
import { updateFooterDates, setupHamburgerMenu } from "./headerFooter.js";
import { displaySpotlights } from "./plantSpotlight.js";
import { showVisitMessage } from "./welcome.js";
import { showDailyTip } from "./tips.js";

document.addEventListener("DOMContentLoaded", async () => {

  updateFooterDates();
  setupHamburgerMenu();
  displaySpotlights();
  showVisitMessage();
  showDailyTip();
   
  // Fetch all plants from JSON
  const allPlants = await getPlants();

  // Display all plants initially
  displayPlants(allPlants);

  // Set up filter buttons to filter plant cards by category
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;
      const filtered = filterPlants(type, allPlants);
      displayPlants(filtered);
    });
  });
});
