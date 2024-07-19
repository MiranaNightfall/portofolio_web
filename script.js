// Smooth scroll
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle descriptions
document.querySelectorAll('.bg-gray-800').forEach(card => {
    card.addEventListener('click', () => {
        const description = card.querySelector('p');
        description.classList.toggle('hidden');
    });
});