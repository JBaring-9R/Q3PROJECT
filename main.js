document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });
    }

    document.getElementById("homeBtn").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
    });

    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["fare-guide", "contact-us"]);
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["fare-guide", "transit-schedule"]);
    });

    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["transit-schedule"]);
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["contact-us"]);
    });

    document.getElementById("sendMessageBtn").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before sending your message.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        toggleVisibility("fare-guide", ["contact-us"]);
    });

    function calculateFare(type) {
        const fares = { "North Avenue": { "Quezon Avenue": 15 } };
        let departure = document.getElementById("departure").value.trim();
        let destination = document.getElementById("destination").value.trim();
        document.getElementById("ticketPrice").value = fares[departure]?.[destination] ? `₱${fares[departure][destination] * (type === "discounted" ? 0.8 : 1)}` : "Invalid route";
    }

    document.getElementById("regularFareBtn").addEventListener("click", () => calculateFare("regular"));
    document.getElementById("discountedFareBtn").addEventListener("click", () => calculateFare("discounted"));
});

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        document.getElementById("contact-us").classList.add("d-none");
        document.getElementById("fare-guide").classList.remove("d-none"); // Show fare guide when closing contact
    });

    // Corrected Contact Form Submission Handling
    function submitContact() {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before sending your message.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById("contact-us").classList.add("d-none"); // Hide after submission
        document.getElementById("fare-guide").classList.remove("d-none"); // Show fare guide after submission
    }

    // Attach event listener to the "Send Message" button
    document.querySelector(".btn-primary[onclick='submitContact()']").addEventListener("click", submitContact);

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
    document.querySelector(".btn-primary[onclick=\"calculateFare('regular')\"]").addEventListener("click", function () {
        calculateFare("regular");
    });

    document.querySelector(".btn-info[onclick=\"calculateFare('discounted')\"]").addEventListener("click", function () {
        calculateFare("discounted");
    });
});
