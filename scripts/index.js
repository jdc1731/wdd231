document.addEventListener('DOMContentLoaded', () => {
    //  Update current year and last modified
    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year').textContent = `${currentYear}`;
    const lastModifiedDate = document.lastModified;
    document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;
  
    //  Mobile menu toggle
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
  
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      menuButton.innerHTML = navMenu.classList.contains("open") ? "&times;" : "&#9776;";
    });
});