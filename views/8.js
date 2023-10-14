document.addEventListener("DOMContentLoaded", function() {
    function displayData(data) {
      const dataContainer = document.getElementById("data-container");
  
      // Loop through the retrieved data and create HTML elements with spacing
      data.forEach(item => {
        const listItem = document.createElement("div");
        listItem.className = "data-item";
        listItem.style.marginBottom = "30px"; // Add margin between items
        listItem.innerHTML = `
          <p>Name: ${item.Name}</p>
          <p>Item: ${item.Item}</p>
          <p>Date: ${item.Date}</p>
          <p>Cost: ${item.Cost}</p>
        `;
        dataContainer.appendChild(listItem);
      });
    }
  
    // Make a GET request to your server and handle the response
    fetch("/login", {
      method: "GET",
    })
      .then(response => {
        if (response.ok) {
        //   alert('YES');
          return response.json(); // Parse the response as JSON
        } else {
        //   alert('NO');
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
  