import { updateFooterDates, setupHamburgerMenu } from "./header-footer.js";
import { getTimestamp } from "./timestamp.js";

document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
  setupHamburgerMenu();
  getTimestamp();
});
