console.log("JavaScript Loaded!");
document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle visibility of elements
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });
    }

    // Function to show sections
    function showSection(sectionId) {
        // Hide all sections
        document.getElementById("fare-guide").classList.add("d-none");
        document.getElementById("transit-schedule").classList.add("d-none");
        document.getElementById("contact-us").classList.add("d-none");

        // Show the requested section
        document.getElementById(sectionId).classList.remove("d-none");

        // Hide carousel unless it's the home section
        let carousel = document.getElementById("ticketCarousel");
        if (sectionId === "fare-guide") {
            carousel.classList.remove("d-none");
        } else {
            carousel.classList.add("d-none");
        }
    }

    // Event Listeners for Navbar Buttons
    document.getElementById("homeBtn").addEventListener("click", function () {
        showSection("fare-guide");
    });

    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        showSection("transit-schedule");
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        showSection("contact-us");
    });

    // Close Buttons for Sections
    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        showSection("fare-guide");
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        showSection("fare-guide");
    });

    // Contact Form Submission Handling
    function submitContact() {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before sending your message.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        showSection("fare-guide"); // Show fare guide after submission
    }

    // Attach event listener to the "Send Message" button
    document.getElementById("sendMessageBtn").addEventListener("click", submitContact);

    // Fare Calculation Function
    function calculateFare(type) {
        const fares = {
            "North Avenue": { "Quezon Avenue": 15, "GMA Kamuning": 20 },
            "Quezon Avenue": { "GMA Kamuning": 15, "North Avenue": 15 },
            "GMA Kamuning": { "Quezon Avenue": 15, "North Avenue": 20 }
        };

        let departure = document.getElementById("departure").value.trim();
        let destination = document.getElementById("destination").value.trim();

        if (!fares[departure] || !fares[departure][destination]) {
            document.getElementById("ticketPrice").value = "Invalid route";
            return;
        }

        let price = fares[departure][destination];

        // Apply discount if necessary
        if (type === "discounted") {
            price *= 0.8; // 20% discount
        }

        document.getElementById("ticketPrice").value = `₱${price.toFixed(2)}`;
    }

    // Attach fare calculation function to buttons
    document.getElementById("regularFareBtn").addEventListener("click", function () {
        calculateFare("regular");
    });

    document.getElementById("discountedFareBtn").addEventListener("click", function () {
        calculateFare("discounted");
    });

    document.addEventListener("DOMContentLoaded", function () {
    // Select all "Choose Ticket" buttons
    let ticketButtons = document.querySelectorAll(".choose-ticket-btn");

    ticketButtons.forEach(button => {
        button.addEventListener("click", function () {
            let ticketType = this.getAttribute("data-ticket"); // Get ticket type
            alert(`Your ${ticketType} ticket has been sent to your email. You may now print it.`);
        });
    });
});
