// Функция для запуска анимации вращения
function startRotation() {
    const logo = document.querySelector('.animated-logo');
    logo.style.animation = 'rotate-once 2s linear';
    
    // Отключаем анимацию после завершения
    setTimeout(() => {
        logo.style.animation = 'none';
    }, 2000);
}

// Запускаем анимацию каждые 5 секунд
setInterval(startRotation, 5000);
