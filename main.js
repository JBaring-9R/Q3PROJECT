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
        toggleVisibility("transit-schedule", ["contact-us", "fare-guide"]);
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule", "fare-guide"]);
    });

    // **Fix: Add Event Listener for Home Button**
    document.querySelector(".nav-link.active").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
    });

    // Close Buttons for Sections
    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        document.getElementById("transit-schedule").classList.add("d-none");
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        document.getElementById("contact-us").classList.add("d-none");
    });
});
