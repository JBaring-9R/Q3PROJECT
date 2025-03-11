document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });

        // Keep the fare guide visible at all times
        document.getElementById("fare-guide").classList.remove("d-none");
    }

    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["contact-us"]);
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule"]);
    });

    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
    });
});
