// script.js
window.addEventListener('load', function() {
    var pageTitleElement = document.getElementById('pageTitle');
    var pageTitle = pageTitleElement.getAttribute('data-title');
    if (pageTitle=="success")
    {
        this.alert("Response has been successfully submitted")
    }

    // You can now use the pageTitle in your JavaScript code
 });
 window.addEventListener('load', function() {
    var pageTitleElement = document.getElementById('pageTitle');
    var pageTitle = pageTitleElement.getAttribute('data-title');
    
    if (pageTitle == "success") {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Set up a GET request to index.js
        xhr.open('GET', '../index.js', true);

        // Define what to do when the response is received
        xhr.onload = function() {
            if (xhr.status == 200) {
                // The request was successful
                console.log(xhr.responseText); // You can process the response here
            } else {
                console.error('Request failed with status ' + xhr.status);
            }
        };

        // Send the request
        xhr.send();
    }
    
    // You can now use the pageTitle in your JavaScript code
});

 