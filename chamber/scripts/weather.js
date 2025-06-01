// DOM Elements
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Constants
const latitude = 39.6841;
const longitude = -110.8549;
const apiKey = "fbdb79cc589a8be8224b57bb2250cc38";

// URL
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Fetch Current Weather
async function fetchWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

// Display Current Weather
function displayWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

// ✅ Export only the current weather function
export { fetchWeather };

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch members");
    const data = await response.json();
    return data.members;
  } catch (error) {
    console.error("Error loading members:", error);
    return [];
  }
}

// Randomly select 3 members and display them
async function displaySpotlights() {
  const allMembers = await getMembers();

  // Optionally filter for spotlight-eligible members (e.g., "gold" or "silver" tiers)
  // const spotlightEligible = allMembers.filter(m => m.membership === "gold" || m.membership === "silver");

  const randomMembers = allMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
  const container = document.querySelector(".spotlight-container");
  container.innerHTML = "";

  randomMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

export { displaySpotlights };
