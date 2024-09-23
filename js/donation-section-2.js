document.getElementById('donation-2').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the donation input value
    const addDonation = document.getElementById('input-donation-2').value;
    const addDonationNumber = parseFloat(addDonation);

    // Get the confirmation popup/modal
    const confirmationPopup = document.getElementById('my_modal_2');
    
    if(addDonationNumber > 0) {
        // Get the section balance and update it
        const sectionBalanceElement = document.getElementById('accountBalance-2');
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
document.getElementById('closeBtn-2').addEventListener('click', function() {
    const confirmationPopup = document.getElementById('my_modal_2');
    confirmationPopup.close();
});
