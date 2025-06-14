import { setupTabs } from "./tabs.js";
import { updateFooterDates, setupHamburgerMenu } from "./headerFooter.js";


document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    updateFooterDates();
    setupHamburgerMenu();
});