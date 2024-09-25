// const donationCards = document.getElementById('donationCards');

// function logDonation(amount, sectionName) {
//     const donationRecord = document.createElement('div');
//     donationRecord.classList.add('bg-white', 'border', 'border-gray-300', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4');
//     donationRecord.innerHTML = `
//         <p class="font-bold">Donation Successful!</p>
//         <p>Amount: ${amount} BDT</p>
//         <p>Cause: ${sectionName}</p>
//     `;
//     donationCards.appendChild(donationRecord);
// }

// function isValidAmount(amount) {
//     const parsedAmount = parseFloat(amount);
//     return !isNaN(parsedAmount) && parsedAmount > 0;
// }

// document.getElementById('donation').addEventListener('click', function () {
//     const amount = document.getElementById('input-donation').value;
//     if (isValidAmount(amount)) {
//         logDonation(amount, 'Flood at Noakhali');
//         document.getElementById('input-donation').value = ''; 
//         document.getElementById('my_modal_1').showModal();
//     } else {
//         alert('Please enter a valid donation amount (positive number)');
//     }
// });

// document.getElementById('donation-2').addEventListener('click', function () {
//     const amount = document.getElementById('input-donation-2').value;
//     if (isValidAmount(amount)) {
//         logDonation(amount, 'Flood at Feni');
//         document.getElementById('input-donation-2').value = '';
//         document.getElementById('my_modal_2').showModal();
//     } else {
//         alert('Please enter a valid donation amount (positive number)');
//     }
// });

// document.getElementById('donation-3').addEventListener('click', function () {
//     const amount = document.getElementById('input-donation-3').value;
//     if (isValidAmount(amount)) {
//         logDonation(amount, 'Aid for Injured in the Quota Movement');
//         document.getElementById('input-donation-3').value = ''; 
//         document.getElementById('my_modal_3').showModal();
//     } else {
//         alert('Please enter a valid donation amount (positive number)');
//     }
// });
