// events.js

const eventsContainer = document.getElementById("events");

async function getEvents() {
  try {
    const response = await fetch("data/events.json");
    const data = await response.json();
    displayEvents(data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

function displayEvents(events) {
  eventsContainer.innerHTML = "";
  const grid = document.createElement("div");
  grid.classList.add("events-grid");

  events.forEach((event) => {
    const card = document.createElement("section");
    card.classList.add("event-card");
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Description:</strong> ${event.description}</p>`;
    grid.appendChild(card);
  });

  eventsContainer.appendChild(grid);
}

// ✅ Export both functions
export { getEvents, displayEvents };
