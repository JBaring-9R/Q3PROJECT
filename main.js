document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            document.getElementById(element).classList.add("d-none");
        });
    }

    function hideFareGuide() {
        document.getElementById("fare-guide").classList.add("d-none");
    }

    function showFareGuide() {
        document.getElementById("fare-guide").classList.remove("d-none");
    }

    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["contact-us", "homepage"]);
        hideFareGuide();
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule", "homepage"]);
        hideFareGuide();
    });

    document.getElementById("homeBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });

    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        toggleVisibility("homepage", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });
});
