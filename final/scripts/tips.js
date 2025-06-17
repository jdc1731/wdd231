const tipsURL = "data/tipOfTheDay.json";

async function showDailyTip() {
  try {
    const response = await fetch(tipsURL);
    const data = await response.json();
    const tips = data.tips;

    // Pick a random tip
    const randomIndex = Math.floor(Math.random() * tips.length);
    const dailyTip = tips[randomIndex].tip;

    // Inject it into the HTML
    document.getElementById("dailyTip").textContent = dailyTip; 
  } catch (error) {
    console.error("Error loading tip of the day:", error);
    document.getElementById("dailyTip").textContent = "Unable to load tip.";
  }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", showDailyTip);

export { showDailyTip };