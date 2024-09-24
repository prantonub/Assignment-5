document.addEventListener('DOMContentLoaded', function () {
    const faqSection = document.getElementById('faqSection');
    
    // Simulate a toggle for demonstration purposes
    const isHidden = faqSection.classList.contains('hidden');
    faqSection.classList.toggle('hidden', !isHidden);
});
