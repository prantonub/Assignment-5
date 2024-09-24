const donationCards = document.getElementById('donationCards');
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
    showConfirmationMessage(`Donation successfully made for ${sectionName}`);
}


// Donation button for Section 1 (Noakhali)
document.getElementById('donation').addEventListener('click', function () {
    const amount = document.getElementById('input-donation').value;
    if (amount) {
        logDonation(amount, 'Flood at Noakhali');
        document.getElementById('my_modal_1').showModal();
        document.getElementById('input-donation').value = ''; 
    }
});

// Donation button for Section 2 (Feni)
document.getElementById('donation-2').addEventListener('click', function () {
    const amount = document.getElementById('input-donation-2').value;
    if (amount) {
        logDonation(amount, 'Flood at Feni');
        document.getElementById('my_modal_2').showModal();
        document.getElementById('input-donation-2').value = '';
    }
});

// Donation button for Section 3 (Quota Movement)
document.getElementById('donation-3').addEventListener('click', function () {
    const amount = document.getElementById('input-donation-3').value;
    if (amount) {
        logDonation(amount, 'Aid for Injured in the Quota Movement');
        document.getElementById('my_modal_3').showModal();
        document.getElementById('input-donation-3').value = ''; 
    }
});