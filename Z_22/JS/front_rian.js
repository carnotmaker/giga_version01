const box = document.getElementById('rainBox'); // 雨滴容器
let boxHeight = box.clientHeight; // 容器高度
let boxWidth = box.clientWidth; // 容器寬度

// 當視窗大小變動時更新容器寬高
window.onresize = function () {
    boxHeight = box.clientHeight;
    boxWidth = box.clientWidth;
};

// 定時生成雨滴
setInterval(() => {
    const rain = document.createElement('div'); // 創建雨滴
    rain.classList.add('rain'); // 添加 rain 類 //
    rain.style.top = 0; // 初始位置
    rain.style.left = Math.random() * boxWidth + 'px'; // 隨機水平位置
    //rain.style.opacity = Math.random(); // 隨機透明度
    rain.style.opacity = 0.7; // 所有雨滴透明度固定為 70%(更改:我像要讓它固定透明度)
    box.appendChild(rain); // 將雨滴添加到容器中

    let speed = 1; // 初始速度
    const timer = setInterval(() => {
        // 讓雨滴下落
        if (parseInt(rain.style.top) > boxHeight) {
            clearInterval(timer); // 超出容器高度時停止定時器
            box.removeChild(rain); // 移除雨滴元素
        }
        speed++; // 速度逐漸增加
        rain.style.top = parseInt(rain.style.top) + speed + 'px';

           // 根據雨滴位置動態調整透明度
        rain.style.opacity = 1 - parseInt(rain.style.top) / boxHeight;
    }, 5); // 每 20 毫秒移動一次
}, 40); // 每 50 毫秒生成一個新的雨滴