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

gridButton.addEventListener("click", () => {
  cardsContainer.classList.add("grid");
  cardsContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  cardsContainer.classList.add("list");
  cardsContainer.classList.remove("grid");
});
getMembers();

export { getMembers, displayMembers }; // Export functions for potential reuse