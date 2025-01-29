// Add any JavaScript interactivity here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a hover effect to the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#4CAF50';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
        // Handle carpool form submission
document.getElementById("carpool-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;

    // Display a confirmation message
    document.getElementById("carpool-message").textContent = `Thank you, ${name}! We'll contact you about carpooling options near ${location}.`;
});
        // Simulate a real-time CO2 savings counter
let co2Saved = 0;
const counterElement = document.getElementById("co2-counter");

setInterval(() => {
    co2Saved += Math.floor(Math.random() * 10); // Random increment
    counterElement.textContent = co2Saved;
}, 1000); // Update every second
    });
});