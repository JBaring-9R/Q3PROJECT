document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle visibility of elements
    function toggleVisibility(showElement, hideElements) {
        let showEl = document.getElementById(showElement);
        if (showEl) showEl.classList.remove("d-none");

        hideElements.forEach(element => {
            let hideEl = document.getElementById(element);
            if (hideEl) hideEl.classList.add("d-none");
        });

        // Ensure carousel is only visible when "fare-guide" is shown
        let carousel = document.getElementById("ticketCarousel");
        if (carousel) {
            if (showElement === "fare-guide") {
                carousel.classList.remove("d-none");
            } else {
                carousel.classList.add("d-none");
            }
        }
    }

    // Event Listeners for Navbar Buttons
    let transitScheduleBtn = document.getElementById("transitScheduleBtn");
    let contactUsBtn = document.getElementById("contactUsBtn");
    let homeBtn = document.querySelector(".nav-link[href='#']"); // Fix for Home button

    if (transitScheduleBtn) {
        transitScheduleBtn.addEventListener("click", function () {
            toggleVisibility("transit-schedule", ["contact-us", "fare-guide"]);
        });
    }

    if (contactUsBtn) {
        contactUsBtn.addEventListener("click", function () {
            toggleVisibility("contact-us", ["transit-schedule", "fare-guide"]);
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
        });
    }

    // Close Buttons for Sections (Fix: Return to Fare Guide)
    let closeScheduleBtn = document.getElementById("closeScheduleBtn");
    let closeContactBtn = document.getElementById("closeContactBtn");

    if (closeScheduleBtn) {
        closeScheduleBtn.addEventListener("click", function () {
            toggleVisibility("fare-guide", ["transit-schedule", "contact-us"]);
        });
    }

    if (closeContactBtn) {
        closeContactBtn.addEventListener("click", function () {
            toggleVisibility("fare-guide", ["contact-us", "transit-schedule"]);
        });
    }

    // Ticket Selection in Carousel
    let ticketButtons = document.querySelectorAll(".choose-ticket-btn");
    if (ticketButtons) {
        ticketButtons.forEach(button => {
            button.addEventListener("click", function () {
                let ticketType = this.getAttribute("data-ticket"); // Get ticket type
                alert(`Your ${ticketType} ticket has been sent to your email. You may now print it.`);
            });
        });
    }
});
