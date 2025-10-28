// Основная функциональность
const actionBtn = document.getElementById('actionBtn');
const output = document.getElementById('output');

const messages = [
    "Отлично! 🎉",
    "Vercel - это круто! 🚀",
    "Сайт работает в интернете! 🌐",
    "Продолжаем в том же духе! 💪",
    "JavaScript работает! ⚡"
];

let clickCount = 0;

actionBtn.addEventListener('click', function() {
    clickCount++;

    // Случайное сообщение
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Эффект на кнопке
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);

    // Вывод результата
    output.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">${randomMessage}</div>
            <div style="color: #666; font-size: 0.9rem;">Нажатий: ${clickCount}</div>
        </div>
    `;

    // Добавляем анимацию
    output.style.animation = 'none';
    setTimeout(() => {
        output.style.animation = 'fadeIn 0.5s ease';
    }, 10);
});

// Дополнительная интерактивность
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Инициализация
console.log('Сайт загружен и готов к работе!');
output.innerHTML = '<div style="color: #666;">Нажмите кнопку чтобы начать...</div>';
