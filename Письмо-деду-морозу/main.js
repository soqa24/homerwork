const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width, height, snowflakes;

// Устанавливаем размер холста
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resize);
resize();

// Настройки снежинок
const snowflakeCount = 150; // Количество снежинок
const gravity = 0.5;       // Скорость падения
const wind = 0.2;          // Скорость ветра

// Создаем снежинки
function createSnowflakes() {
    snowflakes = [];
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1, // Размер снежинки
            opacity: Math.random(),
            speedX: Math.random() * wind - (wind / 2),
            speedY: Math.random() * gravity + 1
        });
    }
}

function updateSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        
        s.y += s.speedY;
        s.x += s.speedX;

        // Если снежинка улетела вниз — возвращаем её наверх
        if (s.y > height) {
            s.y = -10;
            s.x = Math.random() * width;
        }
        
        // Если улетела за края по бокам
        if (s.x > width) s.x = 0;
        if (s.x < 0) s.x = width;
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Цвет снега (белый с прозрачностью)
    ctx.beginPath();
    
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    
    ctx.fill();
}

function loop() {
    updateSnowflakes();
    drawSnowflakes();
    requestAnimationFrame(loop);
}

createSnowflakes();
loop();

