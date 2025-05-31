const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=imperial&appid=fbdb79cc589a8be8224b57bb2250cc38";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`; // 1. temperature
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // 2. icon source
  let desc = data.weather[0].description; // 3. description
  weatherIcon.setAttribute("src", iconsrc); // 4. set image source
  weatherIcon.setAttribute("alt", desc); // 5. set image alt text
  captionDesc.textContent = `${desc}`; // 6. caption text
}