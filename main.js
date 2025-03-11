document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(element) {
        let section = document.getElementById(element);
        
        // Toggle visibility
        if (section.classList.contains("d-none")) {
            section.classList.remove("d-none");
        } else {
            section.classList.add("d-none");
        }
    }

    // Transit Schedule Toggle
    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule");
        document.getElementById("contact-us").classList.add("d-none"); // Hide Contact Us when showing Transit Schedule
    });

    // Contact Us Toggle
    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us");
        document.getElementById("transit-schedule").classList.add("d-none"); // Hide Transit Schedule when showing Contact Us
    });

    // Close Transit Schedule
    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        document.getElementById("transit-schedule").classList.add("d-none");
    });

    // Close Contact Us
    document.getElementById("closeContactBtn").addEventListener("click", function () {
        document.getElementById("contact-us").classList.add("d-none");
    });

    // Ensure Fare Guide is always visible
    document.getElementById("fare-guide").classList.remove("d-none");
});
