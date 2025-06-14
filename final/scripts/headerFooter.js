export function updateFooterDates() {
  const currentYear = new Date().getFullYear();
  document.querySelector("#current-year").textContent = `${currentYear}`;
  const lastModifiedDate = document.lastModified;
  document.querySelector("#last-modified").textContent = `${lastModifiedDate}`;
}

export function setupHamburgerMenu() {
  const hamburgerElement = document.querySelector("#myButton");
  const navMenu = document.querySelector(".menuLinks");

  hamburgerElement.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
    hamburgerElement.textContent = hamburgerElement.classList.contains("open")
      ? "X"
      : "☰";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
      navMenu.classList.remove("open");
      hamburgerElement.classList.remove("open");
      hamburgerElement.textContent = "☰";
    }
  });
}
