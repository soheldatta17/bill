function expense() {
    var nameInput = document.getElementById("input_value1");
    var dateInput = document.getElementById("input_value2");
    var costInput = document.getElementById("input_value3");
    var personInput = document.getElementById("payment_method");

    var name = nameInput.value;
    var date = dateInput.value;
    var cost = costInput.value;
    var person = personInput.value;

    // Check if any of the inputs are empty
    if (name === "" || date === "" || cost === "" || person === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }
    alert('Submitted')
    // Create a new transaction card
    var transactionCards = document.querySelector(".transaction-cards");

    // Create a new transaction card container
    var card = document.createElement("div");
    card.classList.add("transaction-card");

    // Create elements for date, description, and amount

    var nameElement = document.createElement("div");
    nameElement.classList.add("transaction-name");
    nameElement.innerText = "Name: " + person;

    var descriptionElement = document.createElement("div");
    descriptionElement.classList.add("transaction-description");
    descriptionElement.innerText = "Item Name: " + name;

    var dateElement = document.createElement("div");
    dateElement.classList.add("transaction-date");
    dateElement.innerText = "Date: " + date;



    var amountElement = document.createElement("div");
    amountElement.classList.add("transaction-amount");
    amountElement.innerText = "Amount (Rs): " + cost;

    // Append elements to the card container
    card.appendChild(nameElement);
    card.appendChild(descriptionElement);
    card.appendChild(dateElement);
    card.appendChild(amountElement);

    // Append the card to the transaction card container
    transactionCards.appendChild(card);

    // Clear the input fields and reset placeholders
    nameInput.value = "";
    dateInput.value = "";
    costInput.value = "";
    personInput.value = ""; // This sets the dropdown to its default value

    // Scroll to the transaction history or perform any other actions as needed
    window.scroll({
        top: document.querySelector(".transaction-history").offsetTop,
        left: 0,
        behavior: 'smooth'
    });

    // Send a POST request to the server with the form data
    // alert(date)

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
        },
        // body: JSON.stringify({ name: name }), // Convert your data to a JSON string
        body: JSON.stringify({
            name: name,
            date: date,
            cost: cost,
            person: person
        })
    })
        .then(response => response.json())
        .then(data => {
            alert('Success');
            // Handle the server's response, if needed
        })
        .catch(error => {
            alert('Error')
            console.error(error);
        });
        
    // fetch("/login", {
    //     method: "GET",
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error("Failed to fetch data");
    //         }
    //     })
    //     .then(data => {
    //         // Handle the data from the server here
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });


}

