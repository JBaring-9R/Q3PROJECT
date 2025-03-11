// Function to toggle Transit Schedule visibility
document.getElementById("transitScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.remove("d-none");
});

document.getElementById("closeScheduleBtn").addEventListener("click", function() {
    document.getElementById("transit-schedule").classList.add("d-none");
});

// Function to calculate fare (Placeholder: Add logic later)
function calculateFare(type) {
    let ticketPrice = document.getElementById("ticketPrice");
    
    if (type === "regular") {
        ticketPrice.value = "₱30.00"; // Replace with actual calculation
    } else if (type === "discounted") {
        ticketPrice.value = "₱15.00"; // Replace with actual calculation
    }
}
