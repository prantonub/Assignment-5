    document.getElementById('donation-3').addEventListener('click', function(event) {
        event.preventDefault();

        const addDonation = document.getElementById('input-donation-3').value;
        const addDonationNumber = parseFloat(addDonation);

        
        const confirmationPopup = document.getElementById('my_modal_3');
        
       if(addDonationNumber > 0) {
        
        const sectionBalanceElement = document.getElementById('accountBalance-3');
        const sectionBalance = parseFloat(sectionBalanceElement.innerText.replace(' BDT', ''));
        const newSectionBalance = sectionBalance + addDonationNumber;
        sectionBalanceElement.innerText = newSectionBalance + " BDT";

        const mainBalanceElement = document.getElementById('mainBalance');
        const mainBalance = parseFloat(mainBalanceElement.innerText.replace(' BDT', ''));

       
        if (addDonationNumber <= mainBalance) {
            const newMainBalance = mainBalance - addDonationNumber;
            mainBalanceElement.innerText = newMainBalance + " BDT";

            
            confirmationPopup.showModal();

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
    const confirmationPopup = document.getElementById('my_modal_3');
    confirmationPopup.close();
});