const numberOfMeteors = 200;  // 流星數量
const meteorContainer = document.querySelector('.meteor-background');

// 創建單顆流星
function createMeteor() {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  
  // 隨機位置和大小
  const x = Math.random() * window.innerWidth;  // 隨機 X 位置
  const y = Math.random() * window.innerHeight; // 隨機 Y 位置
  const size = Math.random() * 3 + 2; // 流星大小（2px到5px）
  const opacity = Math.random() * 0.5 + 0.5; // 流星透明度（0.5到1）

  // 設置流星的樣式
  meteor.style.left = `${x}px`;
  meteor.style.top = `${y}px`;
  meteor.style.width = `${size}px`;
  meteor.style.height = `${size}px`;
  meteor.style.opacity = opacity;
  
  // 隨機動畫時間，使每顆流星下落時間不同
  const animationDuration = Math.random() * 5 + 5; // 流星下落動畫時間（5秒到10秒）
  meteor.style.animationDuration = `${animationDuration}s`;

  meteorContainer.appendChild(meteor);
}

// 創建所有流星
for (let i = 0; i < numberOfMeteors; i++) {
  createMeteor();
}