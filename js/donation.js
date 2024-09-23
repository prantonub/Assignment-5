document.getElementById('donation').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the donation input value
    const addDonation = document.getElementById('input-donation').value;
    const addDonationNumber = parseFloat(addDonation);

    // Get the confirmation popup/modal
    const confirmationPopup = document.getElementById('my_modal_1');
    
    if (addDonationNumber > 0) {
        // Get the section balance and update it
        const sectionBalanceElement = document.getElementById('accountBalance');
        const sectionBalance = parseFloat(sectionBalanceElement.innerText.replace(' BDT', ''));
        const newSectionBalance = sectionBalance + addDonationNumber;
        sectionBalanceElement.innerText = newSectionBalance + " BDT";

        const mainBalanceElement = document.getElementById('mainBalance');
        const mainBalance = parseFloat(mainBalanceElement.innerText.replace(' BDT', ''));

        // Check if main balance is sufficient for donation
        if (addDonationNumber <= mainBalance) {
            const newMainBalance = mainBalance - addDonationNumber;
            mainBalanceElement.innerText = newMainBalance + " BDT";

            // Show the confirmation popup when the donation is successful
            confirmationPopup.showModal();

        } else {
            alert('Insufficient balance to complete the donation.');
            // Hide the confirmation popup if it is visible
            confirmationPopup.close();
        }
    } else {
        alert('Please enter a valid donation amount.');
        // Hide the confirmation popup if it is visible
        confirmationPopup.close();
    }
});

// Hide the confirmation popup when the close button is clicked
document.getElementById('closeBtn').addEventListener('click', function() {
    const confirmationPopup = document.getElementById('my_modal_1');
    confirmationPopup.close();
});

// section-2 3

// Get all the donate buttons
const donateButtons = document.querySelectorAll(".donate-btn");

// Loop through all the donate buttons and add the same event listener
donateButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Get the corresponding input and modal for the clicked button
        const amountInput = document.querySelectorAll(".input-donation")[index];
        const donationModal = document.querySelectorAll(".donation-modal")[index];

        // Get the amount from the input field
        const amount = amountInput.value;
        
        // If there's a valid amount, show the modal
        if (amount) {
            // Find the balance element inside the current section and update it
            const balanceElement = button.closest("section").querySelector(".text-xl");
            balanceElement.textContent = `${amount} BDT`;

            // Show the corresponding modal
            donationModal.showModal();
        }
    });
});

// Close button functionality for all modals
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const donationModal = document.querySelectorAll(".donation-modal")[index];
        donationModal.close();
    });
});
