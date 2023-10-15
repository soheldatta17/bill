document.addEventListener("DOMContentLoaded", function() {
  function displayData(data) {
      const dataContainer = document.getElementById("data-container");

      // Loop through the retrieved data and create card elements
      data.forEach(item => {
          const card = document.createElement("div");
          card.className = "data-card";
          card.innerHTML = `
              <div class="data-item">
                  <p>Name: ${item.Name}</p>
                  <p>Item: ${item.Item}</p>
                  <p>Date: ${item.Date}</p>
                  <p>Cost: ${item.Cost}</p>
              </div>
          `;

          dataContainer.appendChild(card);
      });
  }

  // Make a GET request to your server and handle the response
  fetch("/login", {
      method: "GET",
  })
      .then(response => {
          if (response.ok) {
              return response.json(); // Parse the response as JSON
          } else {
              throw new Error("Failed to fetch data");
          }
      })
      .then(data => {
          // Call the function to display the retrieved data
          displayData(data);
      })
      .catch(error => {
          console.error(error);
      });
});
