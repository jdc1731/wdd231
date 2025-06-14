// thankyou.js
export function displayThankYouData() {
  document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("latestGardeningAdvice"));

    if (!data) return;

    document.getElementById("displayFirstName").textContent =
      data.firstName || "N/A";
    document.getElementById("displayLastName").textContent =
      data.lastName || "N/A";
    document.getElementById("displayEmail").textContent = data.email || "N/A";
    document.getElementById("displayGardeningLevel").textContent =
      data.gardeningLevel || "N/A";
    document.getElementById("displayAdvice").textContent = data.advice || "N/A";
    document.getElementById("displayTimestamp").textContent =
      new Date(data.timestamp).toLocaleString() || "N/A";
  });
}
