// Handle form submission
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
  
    // Capture user input into an object
    let userInput = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
  
    // Validate form fields
    if (userInput.name && userInput.email && userInput.message) {
      console.log("Form submitted:", userInput);
      alert("Thank you for your feedback!");
      event.target.reset(); // Clear form after submission
    } else {
      alert("Please fill all required fields.");
    }
  });
  