document.getElementById('donation')
.addEventListener('click', function(event){
    event.preventDefault();
const addDonation = document.getElementById('input-donation').value;
const addDonationNumber = parseFloat(addDonation);
console.log(addDonation)


const balance = document.getElementById('accountBalance').innerText;
const balanceNumber = parseFloat(balance)

const newBalance = balanceNumber + addDonationNumber;
document.getElementById('accountBalance').innerText = newBalance + " BDT";
})