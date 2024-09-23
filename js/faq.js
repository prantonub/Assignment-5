
const blogButton = document.getElementById('blogButton');
const faqSection = document.getElementById('faqSection');

blogButton.addEventListener('click', function() {

    if (faqSection.classList.contains('hidden')) {
       
        faqSection.classList.remove('hidden');
    } else {

        faqSection.classList.add('hidden');
    }
});
