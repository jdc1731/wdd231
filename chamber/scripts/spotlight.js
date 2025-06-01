const spotlightURL = "data/members.json";

async function displaySpotlights() {
  try {
    const response = await fetch(spotlightURL);
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
    container.innerHTML = "";

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

export { displaySpotlights };
