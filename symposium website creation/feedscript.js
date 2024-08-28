document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("status").innerText = "Successfully submitted your feedback";
    
    
    document.getElementById("feedbackForm").reset();
  });