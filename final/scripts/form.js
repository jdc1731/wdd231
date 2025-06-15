import { updateFooterDates, setupHamburgerMenu } from "./headerFooter.js";
import { getTimestamp } from "./timestamp.js";

document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
  setupHamburgerMenu();
  getTimestamp();
});
