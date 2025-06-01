import { updateFooterDates, setupHamburgerMenu } from "./header-footer.js";
import { getEvents } from "./current-events.js";
import { fetchWeather } from "./weather.js";
import { displaySpotlights, getMembers } from "./members.js";


document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
  setupHamburgerMenu();
  getEvents();
    fetchWeather();
    getMembers();
    displaySpotlights();
});
