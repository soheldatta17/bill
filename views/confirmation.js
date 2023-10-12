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
 