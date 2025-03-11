// Function to toggle Transit Schedule visibility
document.getElementById("transitScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.remove("d-none");
    document.getElementById("contact-us").classList.add("d-none"); // Hide Contact Us if open
});

document.getElementById("closeScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.add("d-none");
});

// Fix: Properly select "Contact Us" button by ID
document.getElementById("contactUsBtn").addEventListener("click", function() {
    document.getElementById("contact-us").classList.remove("d-none");
    document.getElementById("transit-schedule").classList.add("d-none"); // Hide Transit Schedule if open
});

// Function to close Contact Us section
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
