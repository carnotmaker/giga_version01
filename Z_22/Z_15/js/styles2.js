const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function toggleFlip(card) {
    const innerCard = card.querySelector('.flip-card-inner');
    innerCard.style.transform = innerCard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
}
        // 為每張卡片添加點擊事件
        const cards = document.querySelectorAll('.magic-card');
        const container = document.getElementById('card-container');

        // 點擊卡片
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation(); // 阻止事件冒泡
                clearSelection();
                card.classList.add('clicked');
            });
        });

        // 點擊空白處
        document.body.addEventListener('click', () => {
            clearSelection();
        });

        // 清除所有卡片的選中狀態
        function clearSelection() {
            cards.forEach(card => {
                card.classList.remove('clicked');
            });
        }

        document.addEventListener('click', function (event) {
            const allCards = document.querySelectorAll('.expand-card');
            const isCard = event.target.closest('.expand-card');
        
            // 如果點擊的不是卡牌，則收回所有卡牌
            if (!isCard) {
                allCards.forEach(card => card.classList.remove('expanded'));
            } else {
                // 切換被點擊的卡牌展開狀態
                const isExpanded = isCard.classList.contains('expanded');
                allCards.forEach(card => card.classList.remove('expanded'));
                if (!isExpanded) {
                    isCard.classList.add('expanded');
                }
            }
        });
        