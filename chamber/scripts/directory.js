import { updateFooterDates, setupHamburgerMenu } from "./header-footer.js";
import { getMembers } from "./members.js";

document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
  setupHamburgerMenu();
  getMembers();
});
