// Reference the History and Donation tabs
const donationTab = document.getElementById("donationTab");
const historyTab = document.getElementById("historyTab");

// Reference all donation sections
const sections = document.querySelectorAll('section[id^="section-"]');
const donationHistory = document.getElementById("donationHistory");
const donationCards = document.getElementById("donationCards");

// Show donation sections and hide history by default
donationHistory.classList.add('hidden');

// Event listener for showing History tab
historyTab.addEventListener("click", function () {
    // Hide all donation sections
    sections.forEach(section => section.classList.add('hidden'));
    
    // Show donation history
    donationHistory.classList.remove("hidden");

    // If no donations, show a message
    if (donationCards.innerHTML.trim() === '') {
        donationCards.innerHTML = '<p class="text-gray-500">No donations made yet.</p>';
    }
});

// Event listener for showing Donation tab
donationTab.addEventListener("click", function () {
    // Show all donation sections
    sections.forEach(section => section.classList.remove('hidden'));

    // Hide donation history
    donationHistory.classList.add("hidden");
});

// Function to log donation in the history
function logDonation(amount, sectionName) {
    const donationRecord = document.createElement('div');
    donationRecord.classList.add('bg-white', 'border', 'border-gray-300', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4');
    donationRecord.innerHTML = `
        <p class="font-bold">Donation Successful!</p>
        <p>Amount: ${amount} BDT</p>
        <p>Cause: ${sectionName}</p>
    `;
    donationCards.appendChild(donationRecord);
}

// Event listeners for the donation buttons

// Donation button for Section 1 (Noakhali)
document.getElementById('donation').addEventListener('click', function () {
    const amount = document.getElementById('input-donation').value;
    if (amount) {
        logDonation(amount, 'Flood at Noakhali');
        document.getElementById('my_modal_1').showModal();
        document.getElementById('input-donation').value = ''; // Clear input field
    }
});

document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('my_modal_1').close();
});

// Donation button for Section 2 (Feni)
document.getElementById('donation-2').addEventListener('click', function () {
    const amount = document.getElementById('input-donation-2').value;
    if (amount) {
        logDonation(amount, 'Flood at Feni');
        document.getElementById('my_modal_2').showModal();
        document.getElementById('input-donation-2').value = ''; // Clear input field
    }
});

document.getElementById('closeBtn-2').addEventListener('click', function () {
    document.getElementById('my_modal_2').close();
});

// Donation button for Section 3 (Quota Movement)
document.getElementById('donation-3').addEventListener('click', function () {
    const amount = document.getElementById('input-donation-3').value;
    if (amount) {
        logDonation(amount, 'Aid for Injured in the Quota Movement');
        document.getElementById('my_modal_3').showModal();
        document.getElementById('input-donation-3').value = ''; // Clear input field
    }
});

document.getElementById('closeBtn-3').addEventListener('click', function () {
    document.getElementById('my_modal_3').close();
});
