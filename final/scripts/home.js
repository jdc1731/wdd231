import { updateFooterDates, setupHamburgerMenu } from "./headerFooter.js";
import { displaySpotlights } from "./plantSpotlight.js";
import { showVisitMessage } from "./welcome.js";
import { showDailyTip } from "./tips.js";

document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
  setupHamburgerMenu();
  displaySpotlights();
  showVisitMessage();
  showDailyTip();
});
