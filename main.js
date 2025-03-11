document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });
    }

    // Show Transit Schedule & Hide Others
    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["contact-us", "fare-guide"]);
    });

    // Show Contact Us & Hide Others
    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule", "fare-guide"]);
    });

    // Show Home & Bring Back Fare Guide
    document.getElementById("homeBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        document.getElementById("fare-guide").classList.remove("d-none"); // Show fare guide
    });

    // Close Transit Schedule
    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        document.getElementById("fare-guide").classList.remove("d-none"); // Show fare guide
    });

    // Close Contact Us
    document.getElementById("closeContactBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        document.getElementById("fare-guide").classList.remove("d-none"); // Show fare guide
    });
});
