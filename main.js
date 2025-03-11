document.addEventListener("DOMContentLoaded", function () {
    function toggleVisibility(showElement, hideElements) {
        document.getElementById(showElement).classList.remove("d-none");
        hideElements.forEach(element => {
            let el = document.getElementById(element);
            if (el) el.classList.add("d-none");
        });
    }

    function hideFareGuide() {
        let fareGuide = document.getElementById("fare-guide");
        if (fareGuide) fareGuide.classList.add("d-none");
    }

    function showFareGuide() {
        let fareGuide = document.getElementById("fare-guide");
        if (fareGuide) fareGuide.classList.remove("d-none");
    }

    document.getElementById("transitScheduleBtn").addEventListener("click", function () {
        toggleVisibility("transit-schedule", ["contact-us", "fare-guide"]);
        hideFareGuide();
    });

    document.getElementById("contactUsBtn").addEventListener("click", function () {
        toggleVisibility("contact-us", ["transit-schedule", "fare-guide"]);
        hideFareGuide();
    });

    document.getElementById("homeBtn").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });

    document.getElementById("closeScheduleBtn").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });

    document.getElementById("closeContactBtn").addEventListener("click", function () {
        toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
        showFareGuide();
    });
});
