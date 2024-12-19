const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



const rainCanvas = document.getElementById('rainCanvas');
const ctx = rainCanvas.getContext('2d');

function resizeCanvas() {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let raindrops = [];

function createRaindrop() {
    return {
        x: Math.random() * rainCanvas.width,
        y: Math.random() * rainCanvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 2 
    };
}
for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop());
}
function drawRaindrops() {
    ctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    ctx.strokeStyle = 'rgba(85, 150, 185, 0.7)';
    ctx.lineWidth = 1;

    raindrops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
    });
}

function updateRaindrops() {
    raindrops.forEach(drop => {
        drop.y += drop.speed;
        if (drop.y > rainCanvas.height) {
            drop.y = -drop.length; 
            drop.x = Math.random() * rainCanvas.width; 
        }
    });
}

function animateRain() {
    drawRaindrops();
    updateRaindrops();
    requestAnimationFrame(animateRain);
}

animateRain();


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('#cards img');
    const allCards = document.querySelectorAll('.card-1, .card-2, .card-3, .card-4, .card-5, .card-6, .card-7, .card-8, .card-9');

    const originalStyles = {};

    cards.forEach((card) => {
        originalStyles[card.src] = {
            width: card.style.width,
            height: card.style.height,
            boxShadow: card.style.boxShadow,
            transform: card.style.transform
        };
    });

    const textElements = document.querySelectorAll('.tech-text');
    const textElements2 = document.querySelectorAll('.tech-text2');
    const textElements3 = document.querySelectorAll('.tech-text3');
    const textElements4 = document.querySelectorAll('.tech-text4');
    const textElements5 = document.querySelectorAll('.tech-text5');
    const textElements6 = document.querySelectorAll('.tech-text6');
    const textElements7 = document.querySelectorAll('.tech-text7');
    const textElements8 = document.querySelectorAll('.tech-text8');
    const textElements9 = document.querySelectorAll('.tech-text9');

    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            event.stopPropagation();

            card.classList.remove('rotate');
            card.style.boxShadow = 'none';
            card.style.width = "350px";
            card.style.height = "300px";
            card.style.transform = "none";

            if (card.src.includes('noodle.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/Dry_noodles.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';
                });
            } else if (card.src.includes('rice.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/Braised_Pork_on_Rice.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements2.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('stone_hot_pot.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_stone_hot_pot.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements3.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('Curry_meatloaf.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_Curry_meatloaf.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements4.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('Pork_Knuckles_in_White_Soup.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_Pork_Knuckles_in_White_Soup.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements5.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('Siomai.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_Siomai.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements6.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('Ah_Hua_Fried_Noodles.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_Ah_Hua_Fried_Noodles.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements7.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('Big_wontons.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_Big_wontons.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements8.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            } else if (card.src.includes('Three_Brothers_Douhua.png')) {
                card.dataset.originalSrc = card.src;
                card.src = 'img/real/real_Three_Brothers_Douhua.png';

                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.style.display = 'none';
                    }
                });

                textElements9.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';

                    typeWriter(textElement);
                });
            }
        });
    });


    document.addEventListener('click', (event) => {
        if (!event.target.closest('#cards')) {
            allCards.forEach((card) => {
                card.style.display = 'block'; 
            });

            cards.forEach(card => {
                if (card.dataset.originalSrc) {
                    card.src = card.dataset.originalSrc;
                    delete card.dataset.originalSrc;
                }

                const original = originalStyles[card.src];
                card.style.width = original.width;
                card.style.height = original.height;
                card.style.boxShadow = original.boxShadow;
                card.style.transform = original.transform;
            });

            textElements.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements2.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements3.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements4.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements5.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements6.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements7.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements8.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
            textElements9.forEach((textElement) => {
                textElement.style.opacity = 0;
            });
        }
    });

    function typeWriter(element) {
        const text = element.innerHTML;
        let index = 0;
        element.innerHTML = '';
        function write() {
            element.innerHTML = text.substring(0, index);
            if (index < text.length) {
                index++;
                setTimeout(write, 150);
            }
        }
        write();
    }

    const introTextElement = document.getElementById('intro');
    if (introTextElement) {
        typeWriter(introTextElement);
    }
});

function submitMessage() {
    alert("你已成功提交留言");
}

AOS.init({
    duration: 1000,
    offset: 200,
    delay: 100,
  });




/*document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('#cards img');
    const allCards = document.querySelectorAll('.card-1, .card-2, .card-3, .card-4, .card-5, .card-6, .card-7, .card-8, .card-9');

    // 儲存每張卡片的初始樣式
    const originalStyles = {};

    cards.forEach((card) => {
        originalStyles[card.src] = {
            width: card.style.width,
            height: card.style.height,
            boxShadow: card.style.boxShadow,
            transform: card.style.transform
        };
    });

    // 點擊卡片的邏輯
    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            event.stopPropagation(); // 防止點擊事件冒泡到 document

            // 移除動畫樣式
            card.classList.remove('rotate');
            card.style.boxShadow = 'none';
            card.style.width = "auto";
            card.style.height = "auto";
            card.style.transform = "none";

            // 判斷卡片的圖片是否為目標圖片，並進行處理
            if (card.src.includes('noodle.png')) {
                // 儲存當前圖片路徑
                card.dataset.originalSrc = card.src;
                card.src = 'img/Dry_noodles.png'; // 更換圖片為 Dry_noodles.png
            
                // 隱藏所有其他卡片
                allCards.forEach((otherCard) => {
                    otherCard.style.display = 'none'; // 隱藏所有其他卡片
                });
            
                // 顯示打字效果
                const textElements = document.querySelectorAll('.tech-text');
                textElements.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';
                });
            } else if (card.src.includes('rice.png')) {
                // 儲存當前圖片路徑
                card.dataset.originalSrc = card.src;
                card.src = 'img/Braised_Pork_on_Rice.png'; // 更換圖片為 Braised_Pork_on_Rice.png
            
                // 隱藏所有其他卡片
                allCards.forEach((otherCard) => {
                    otherCard.style.display = 'none'; // 隱藏所有其他卡片
                });
            
                // 顯示打字效果
                const textElements = document.querySelectorAll('.tech-text');
                textElements.forEach((textElement) => {
                    textElement.style.opacity = 1;
                    textElement.style.animationPlayState = 'running';
                });
            }
        });
    });

    // 點擊空白處時還原所有卡片
    document.addEventListener('click', (event) => {
        // 如果點擊的地方不是卡片，才會恢復狀態
        if (!event.target.closest('#cards')) {
            // 恢復所有卡片
            allCards.forEach((card) => {
                card.style.display = 'block'; // 顯示所有卡片
            });

            // 恢復圖片到原始狀態
            cards.forEach(card => {
                if (card.dataset.originalSrc) {
                    card.src = card.dataset.originalSrc; // 重設圖片為原始圖片
                    delete card.dataset.originalSrc; // 移除 dataset 屬性
                }

                // 還原樣式到原始狀態
                const original = originalStyles[card.src];
                card.style.width = original.width;
                card.style.height = original.height;
                card.style.boxShadow = original.boxShadow;
                card.style.transform = original.transform;
            });

            // 隱藏文字效果
            const textElements = document.querySelectorAll('.tech-text');
            textElements.forEach((textElement) => {
                textElement.style.opacity = 0; // 隱藏文字
            });
        }
    });

    // 打字效果代碼
    const textElement = document.getElementById('intro');
    if (textElement) {
        const text = textElement.innerHTML;
        let index = 0;

        function typeWriter() {
            textElement.innerHTML = text.substring(0, index);
            if (index < text.length) {
                index++;
                setTimeout(typeWriter, 150);
            }
        }

        // 初始化時開始打字效果
        typeWriter();
    }
});
*/




/*
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('#cards img');
    const allCards = document.querySelectorAll('.card-1, .card-2, .card-3, .card-4, .card-5, .card-6, .card-7, .card-8, .card-9');

    // 儲存每張卡片的初始樣式
    const originalStyles = {};

    cards.forEach((card) => {
        originalStyles[card.src] = {
            width: card.style.width,
            height: card.style.height,
            boxShadow: card.style.boxShadow,
            transform: card.style.transform
        };
    });

    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            event.stopPropagation(); // 防止點擊事件冒泡到 document

            // 移除動畫樣式
            card.classList.remove('rotate');
            card.style.boxShadow = 'none';
            card.style.width = "auto";
            card.style.height = "auto";
            card.style.transform = "none";

            // 判斷卡片的圖片是否為目標圖片，並進行處理
            if (card.src.includes('noodle.png')) {
                // 儲存當前圖片路徑
                card.dataset.originalSrc = card.src;
                card.src = 'img/Dry_noodles.png';

                card.onload = () => {
                    allCards.forEach((otherCard) => {
                        otherCard.style.display = 'none'; // 隱藏所有其他卡片
                    });
                };
            }

            // 顯示文字效果
            const textElements = document.querySelectorAll('.tech-text');
            textElements.forEach((textElement) => {
                textElement.style.opacity = 1;
                textElement.style.animationPlayState = 'running';
            });
        });
    });

    // 點擊空白處時還原所有卡片
    document.addEventListener('click', (event) => {
        // 如果點擊的地方不是卡片，才會顯示所有卡片
        if (!event.target.closest('#cards')) {
            cards.forEach(card => {
                card.style.display = 'block'; // 顯示每個卡片
                if (card.dataset.originalSrc) {
                    card.src = card.dataset.originalSrc; // 重設圖片為原始圖片
                    delete card.dataset.originalSrc; // 移除 dataset 屬性
                }

                // 還原樣式到原始狀態
                const original = originalStyles[card.src];
                card.style.width = original.width;
                card.style.height = original.height;
                card.style.boxShadow = original.boxShadow;
                card.style.transform = original.transform;
            });

            // 同時顯示其他卡片
            allCards.forEach(card => {
                card.style.display = 'block';
            });

            // 隱藏文字效果
            const textElements = document.querySelectorAll('.tech-text');
            textElements.forEach((textElement) => {
                textElement.style.opacity = 0; // 隱藏文字
            });
        }
    });

    // 打字效果代碼
    const textElement = document.getElementById('intro');
    if (textElement) {
        const text = textElement.innerHTML;
        let index = 0;

        function typeWriter() {
            textElement.innerHTML = text.substring(0, index);
            if (index < text.length) {
                index++;
                setTimeout(typeWriter, 150);
            }
        }

        typeWriter();
    }
});
*/
