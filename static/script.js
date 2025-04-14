const baseUrl = "/pets";
  // Flask backend URL

// Event listener for the form submit
document.getElementById("petForm").addEventListener("submit", async function (e) {
  e.preventDefault();  // Prevent form from reloading the page

  // Get form data
  const petName = document.getElementById("petName").value;
  const petType = document.getElementById("petType").value;
  const petFact = document.getElementById("petFact").value;
  const petImage = document.getElementById("petImage").files[0];

  // Read image file as a base64 string
  const reader = new FileReader();
  reader.onload = async function () {
    const pet = {
      id: Date.now(),  // Unique ID based on timestamp
      name: petName,
      type: petType,
      fact: petFact,
      image: reader.result  // Base64 encoded image
    };

    // POST the pet data to the backend
    await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pet)
    });

    loadPets();  // Reload pets to show the new one
    document.getElementById("petForm").reset();  // Reset form fields
  };

  reader.readAsDataURL(petImage);  // Start reading the image file
});

// Function to load pets from the backend and display them
async function loadPets() {
  const res = await fetch(baseUrl);  // Fetch all pets from backend
  const pets = await res.json();  // Parse the JSON response

  const container = document.getElementById("cardContainer");
  container.innerHTML = "";  // Clear existing pets

  // Create a card for each pet and append it to the container
  pets.forEach(pet => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${pet.image}" alt="Pet Photo"/>
      <h3>${pet.name} (${pet.type})</h3>
      <p>${pet.fact}</p>
      <div class="actions">
        <button class="edit-btn" onclick='editPet(${JSON.stringify(pet)})'>Edit</button>
        <button class="delete-btn" onclick="deletePet(${pet.id})">Delete</button>
      </div>
    `;
    container.appendChild(card);  // Append the card to the container
  });
}

// Function to delete a pet
async function deletePet(id) {
  await fetch(`${baseUrl}/${id}`, { method: "DELETE" });  // DELETE the pet from the backend
  loadPets();  // Reload pets after deletion
}

// Function to edit a pet
function editPet(pet) {
  // Fill in the form with the pet's current data for editing
  document.getElementById("petName").value = pet.name;
  document.getElementById("petType").value = pet.type;
  document.getElementById("petFact").value = pet.fact;
  
  // Delete the pet so it can be added with updated data
  deletePet(pet.id);
}

// Load the list of pets when the page loads
loadPets();
