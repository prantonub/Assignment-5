const donationTab = document.getElementById("donationTab");
const historyTab = document.getElementById("historyTab");

historyTab.addEventListener("click", function() {
    // Remove active classes from donationTab
    donationTab.classList.remove(
        "bg-lime-400",
        "text-black"
    );

    // Add active classes to historyTab
    historyTab.classList.add(
        "bg-lime-400", 
        "text-black"
    );

    // Hide sections when historyTab is clicked
    document.getElementById("section-1").classList.add("hidden");
    document.getElementById("section-2").classList.add("hidden");
    document.getElementById("section-3").classList.add("hidden");
});

donationTab.addEventListener("click", function() {
    // Remove active classes from historyTab
    historyTab.classList.remove(
        "bg-lime-400",
        "text-black"
    );

    // Add active classes to donationTab
    donationTab.classList.add(
        "bg-lime-400", 
        "text-black"
    );

    // Show sections when donationTab is clicked
    document.getElementById("section-1").classList.remove("hidden");
    document.getElementById("section-2").classList.remove("hidden");
    document.getElementById("section-3").classList.remove("hidden");
});

// Function to display donation in history section
function displayDonationInHistory(amount) {
    const donationCards = document.getElementById('donationCards');

    // Create a new donation record in history
    const record = document.createElement('div');
    record.classList.add('bg-white', 'border', 'border-gray-300', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4');
    record.innerHTML = `
        <p class="font-bold">Donation Successful!</p>
        <p>Amount: ${amount} BDT</p>
        <p>Cause: Noakhali Flood Relief</p>
    `;
    donationCards.appendChild(record);
}

// Hide the confirmation popup when the close button is clicked
document.getElementById('closeBtn').addEventListener('click', function() {
    const confirmationPopup = document.getElementById('my_modal_1');
    confirmationPopup.close();
});
