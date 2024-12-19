const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function toggleFlip(card) {
    const innerCard = card.querySelector('.flip-card-inner');
    innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
}
        const cards = document.querySelectorAll('.magic-card');
        const container = document.getElementById('card-container');

        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                clearSelection();
                card.classList.add('clicked');
            });
        });

        document.body.addEventListener('click', () => {
            clearSelection();
        });

        function clearSelection() {
            cards.forEach(card => {
                card.classList.remove('clicked');
            });
        }

        document.addEventListener('click', function (event) {
            const allCards = document.querySelectorAll('.expand-card');
            const isCard = event.target.closest('.expand-card');
        
            if (!isCard) {
                allCards.forEach(card => card.classList.remove('expanded'));
            } else {
                const isExpanded = isCard.classList.contains('expanded');
                allCards.forEach(card => card.classList.remove('expanded'));
                if (!isExpanded) {
                    isCard.classList.add('expanded');
                }
            }
        });
        