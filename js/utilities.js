function getTextFieldValueById(id){
 const textValue = document.getElementById(id).innerText;
 const textNumber = parseFloat(textValue);
 return textNumber;
}




// // document.getElementById('donation')
// .addEventListener('click', function(event) {
//     event.preventDefault();

//     const addDonation = document.getElementById('input-donation').value;
//     const addDonationNumber = parseFloat(addDonation);
//     console.log(addDonation);

//     // Check if the donation amount is a positive number
//     if (addDonationNumber > 0) {
//         const balance = document.getElementById('accountBalance').innerText;
//         const balanceNumber = parseFloat(balance);

//         const newBalance = balanceNumber + addDonationNumber;
//         document.getElementById('accountBalance').innerText = newBalance + " BDT";
//     } else {
//         alert('Failed to add money. Please enter a valid amount.');
//     }

// });


// // Get elements
// const donateBtn = document.getElementById('donate');
// const confirmationPopup = document.getElementById('confirmationPopup');
// const closeBtn = document.getElementById('closeBtn');

// // Show the confirmation popup when the donate button is clicked
// donateBtn.addEventListener('click', function () {
//     confirmationPopup.classList.remove('hidden');
// });

// // Hide the confirmation popup when the close button is clicked
// closeBtn.addEventListener('click', function () {
//     confirmationPopup.classList.add('hidden');
// });
