const url = "data/members.json";
const cardsContainer = document.getElementById("members");
const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");

async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}
function displayMembers(members) {
  cardsContainer.innerHTML = "";
  members.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
        <h2>${member.name}</h2>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Website</a>
        <img src="${member.image}" alt="${member.name}">
        `;
    cardsContainer.appendChild(card);
  });
}

// Function to randomly spotlight 3 members
async function displaySpotlights() {
  console.log("displaySpotlights called");
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const members = data.members;

    // Filter for Gold or Silver members
    const qualified = members.filter(
      (member) =>
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    // Shuffle the array
    const shuffled = qualified.sort(() => 0.5 - Math.random());

    // Get 3 random members
    const selected = shuffled.slice(0, 3);

    // Select the container
    const container = document.querySelector(".spotlight-container");
    container.innerHTML = ""; // clear existing content

    selected.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
          <h3>${member.name}</h3>
          <img src="${member.image}" alt="${member.name}">
          <p>${member.services}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

// Only add event listeners if the buttons exist (i.e., on the directory page)
if (gridButton && listButton && cardsContainer) {
  gridButton.addEventListener("click", () => {
    cardsContainer.classList.add("grid");
    cardsContainer.classList.remove("list");
  });

  listButton.addEventListener("click", () => {
    cardsContainer.classList.add("list");
    cardsContainer.classList.remove("grid");
  });
}

export { getMembers, displayMembers, displaySpotlights };
