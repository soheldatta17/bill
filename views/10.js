document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the button
    document.getElementById("back").addEventListener("click", function() {
      // Navigate to Page 2
      window.location.href = "/";
    });
    document.getElementById("download").addEventListener("click", function() {
        // Navigate to Page 2
        window.location.href = "download";
      });
    
  });