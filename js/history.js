document.getElementById('donation').addEventListener('click', function(event) {
    event.preventDefault();

    const addDonation = document.getElementById('input-donation').value;
    const addDonationNumber = parseFloat(addDonation);

    const confirmationPopup = document.getElementById('my_modal_1');
    
    if (addDonationNumber > 0) {
        const sectionBalanceElement = document.getElementById('accountBalance');
        const sectionBalance = parseFloat(sectionBalanceElement.innerText.replace(' BDT', ''));
        const newSectionBalance = sectionBalance + addDonationNumber;
        sectionBalanceElement.innerText = newSectionBalance + " BDT";

        const mainBalanceElement = document.getElementById('mainBalance');
        const mainBalance = parseFloat(mainBalanceElement.innerText.replace(' BDT', ''));

        if (addDonationNumber <= mainBalance) {
            const newMainBalance = mainBalance - addDonationNumber;
            mainBalanceElement.innerText = newMainBalance + " BDT";

            // Show the confirmation popup
            confirmationPopup.showModal();

            // Add the donation amount to the history section
            addToHistory(addDonationNumber);

        } else {
            alert('Insufficient balance to complete the donation.');
            confirmationPopup.close();
        }
    } else {
        alert('Please enter a valid donation amount.');
        confirmationPopup.close();
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    const confirmationPopup = document.getElementById('my_modal_1');
    confirmationPopup.close();
});

// Function to add the donation amount to the history section
function addToHistory(amount) {
    const historyList = document.getElementById('historyList');

    // Create a new list item for the donation
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerText = `Donated: ${amount} BDT`;

    // Add the new item to the history list
    historyList.appendChild(newHistoryItem);
}
