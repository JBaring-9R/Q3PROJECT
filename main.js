// Function to toggle Transit Schedule visibility
document.getElementById("transitScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.remove("d-none");
});

document.getElementById("closeScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.add("d-none");
});

// Function to calculate fare (Placeholder: Add logic later)
function calculateFare(type) {
    let ticketPrice = document.getElementById("ticketPrice");
    
    if (type === "regular") {
        ticketPrice.value = "₱30.00"; // Replace with actual calculation
    } else if (type === "discounted") {
        ticketPrice.value = "₱15.00"; // Replace with actual calculation
    }
}

// Function to toggle Transit Schedule visibility
document.getElementById("transitScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.remove("d-none");
    document.getElementById("contact-us").classList.add("d-none"); // Hide Contact Us if open
});

document.getElementById("closeScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.add("d-none");
});

// Function to toggle Contact Us visibility
document.querySelector('.nav-link[href="#"]').addEventListener("click", function() {
    document.getElementById("contact-us").classList.remove("d-none");
    document.getElementById("transit-schedule").classList.add("d-none"); // Hide Transit Schedule if open
});

document.getElementById("closeContactBtn").addEventListener("click", function() {
    document.getElementById("contact-us").classList.add("d-none");
});

// Function to handle Contact Form submission
function submitContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before sending your message.");
    } else {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById("contact-us").classList.add("d-none"); // Hide after submission
    }
}
