document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });
    }

    // Function to hide the fare guide
    function hideFareGuide() {
        document.getElementById("fare-guide").classList.add("d-none");
    }

    // Function to show the fare guide
    function showFareGuide() {
        document.getElementById("fare-guide").classList.remove("d-none");
    }

    // Show Transit Schedule & Hide Others
    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["contact-us", "homepage"]);
        hideFareGuide();
    });

    // Show Contact Us & Hide Others
    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule", "homepage"]);
        hideFareGuide();
    });

    // Show Home & Bring Back Fare Guide
    document.getElementById("homeBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });

    // Close Transit Schedule & Bring Back Fare Guide
    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });

    // Close Contact Us & Bring Back Fare Guide
    document.getElementById("closeContactBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });
});
