import { updateFooterDates, setupHamburgerMenu } from "./header-footer.js";
import {
    populateCards, setupModalListeners
} from "./interests.js";
import {
    showVisitMessage
} from "./visit-message.js"


document.addEventListener("DOMContentLoaded", () => {
    updateFooterDates();
    setupHamburgerMenu();
    populateCards();
    setupModalListeners();
    showVisitMessage();
});