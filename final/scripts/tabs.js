function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-buttons button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Hide all tab contents
      tabContents.forEach((section) => {
        section.style.display = "none";
      });

      // Remove active class from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active-tab");
      });

      // Show selected tab content
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.style.display = "block";
      }

      // Mark this button as active
      button.classList.add("active-tab");
    });
  });

  // Show the first tab content by default
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
}

export { setupTabs };
