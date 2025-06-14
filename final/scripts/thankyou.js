document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("displayFirstName").textContent =
    params.get("firstname") || "N/A";
  document.getElementById("displayLastName").textContent =
    params.get("lastname") || "N/A";
  document.getElementById("displayEmail").textContent =
    params.get("email") || "N/A";
 ("description").textContent = params.get("displayDescription") || "N/A";
  document.getElementById("displayTimestamp").textContent =
    params.get("timestamp") || "N/A";
});
