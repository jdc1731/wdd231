document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("displayFirstName").textContent =
    params.get("firstname") || "N/A";
  document.getElementById("displayLastName").textContent =
    params.get("lastname") || "N/A";
  document.getElementById("displayEmail").textContent =
    params.get("email") || "N/A";
  document.getElementById("displayPhone").textContent =
    params.get("phone") || "N/A";
  document.getElementById("displayBusinessName").textContent =
    params.get("business-name") || "N/A";
  document.getElementById("displayTimestamp").textContent =
    params.get("timestamp") || "N/A";
});
