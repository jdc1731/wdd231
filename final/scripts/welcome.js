export function showVisitMessage() {
  const sidebar = document.querySelector(".sidebar-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const daysSince = Math.floor(
      (now - Number(lastVisit)) / (1000 * 60 * 60 * 24)
    );
    if (daysSince < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysSince === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysSince} days ago.`;
    }
  }

  // ✅ Only set the message if the sidebar exists
  if (sidebar) {
    sidebar.textContent = message;
  }

  // Store the current time for the next visit
  localStorage.setItem("lastVisit", now);
}

document.addEventListener("DOMContentLoaded", showVisitMessage);
