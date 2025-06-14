import { updateFooterDates, setupHamburgerMenu } from "./headerFooter.js";
import { handleFormSubmit } from "./advice.js";
import { displayThankYouData } from "./thankyou.js";
import { getTimestamp } from "./timestamp.js";

document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
    setupHamburgerMenu();
    handleFormSubmit();
    displayThankYouData();
    getTimestamp();
});