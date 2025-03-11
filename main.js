document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle visibility of elements
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });
    }

    // Event Listeners for Navbar Buttons
    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["contact-us"]);
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule"]);
    });

    // Close Buttons for Sections
    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        document.getElementById("transit-schedule").classList.add("d-none");
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        document.getElementById("contact-us").classList.add("d-none");
    });

    // Contact Form Submission Handling
    document.getElementById("submitContactBtn").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before sending your message.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById("contact-us").classList.add("d-none"); // Hide after submission
    });
});
