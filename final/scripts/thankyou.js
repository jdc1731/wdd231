document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("displayFirstName").textContent =
    params.get("firstname") || "N/A";

  document.getElementById("displayLastName").textContent =
    params.get("lastname") || "N/A";

  document.getElementById("displayEmail").textContent =
    params.get("email") || "N/A";

  document.getElementById("displayExperience").textContent =
    params.get("experienceLevel") || "N/A";

  document.getElementById("displayDescription").textContent =
    params.get("description") || "N/A";

  // Format timestamp nicely
  const rawTimestamp = params.get("timestamp");
  if (rawTimestamp) {
    const date = new Date(rawTimestamp);
    if (!isNaN(date)) {
      const formatted = date.toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      });
      document.getElementById("displayTimestamp").textContent = formatted;
    } else {
      document.getElementById("displayTimestamp").textContent = "Invalid date";
    }
  } else {
    document.getElementById("displayTimestamp").textContent = "N/A";
  }
});
