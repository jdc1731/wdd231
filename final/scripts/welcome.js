export function showVisitMessage() {
  const sidebar = document.querySelector(".sidebar-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const timeDiff = now - Number(lastVisit);

    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    let timeParts = [];
    if (days > 0) timeParts.push(`${days} day${days !== 1 ? "s" : ""}`);
    if (hours > 0) timeParts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
    if (minutes > 0)
      timeParts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);

    if (timeParts.length === 0) {
      timeParts.push("just a few moments");
    }

    message = `Welcome back! It has been ${timeParts.join(
      ", "
    )} since your last visit.`;
  }

  if (sidebar) {
    sidebar.textContent = message;
  }

  localStorage.setItem("lastVisit", now);
}

document.addEventListener("DOMContentLoaded", showVisitMessage);
