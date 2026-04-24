document.addEventListener('DOMContentLoaded', function() {

    const images = ['me.jpg', 'photo2.jpg', 'photo3.jpg']; 
    let currentIndex = 0;

    const imgElement = document.getElementById('slider-img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Функция для смены фото
    function updateImage() {
        // Добавляем эффект легкого мигания при смене
        imgElement.style.opacity = 0.5;
        
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = 1;
        }, 150);
    }

    // Листаем вперед
    function showNext() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateImage();
    }

    // Листаем назад
    function showPrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateImage();
    }

    // Привязываем функции к кнопкам-стрелкам
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            showNext();
            resetTimer(); // Сброс таймера при ручном клике
        });

        prevBtn.addEventListener('click', () => {
            showPrev();
            resetTimer(); // Сброс таймера при ручном клике
        });
    }

    // Автоматическое переключение (каждые 5 секунд)
    let autoSlide = setInterval(showNext, 5000);

    // Функция сброса таймера, чтобы слайды не прыгали сразу после клика
    function resetTimer() {
        clearInterval(autoSlide);
        autoSlide = setInterval(showNext, 5000);
    }


    // === 2. ЛОГИКА КНОПКИ "УЗНАТЬ БОЛЬШЕ" ===

    const actionBtn = document.querySelector('button[type="button"]:not(.prev-btn):not(.next-btn)');
    const info = document.getElementById('more-info');

    if (actionBtn && info) {
        actionBtn.addEventListener('click', function() {
            // Эффект вспышки на кнопке
            actionBtn.style.backgroundColor = '#ff1493';
            setTimeout(() => {
                actionBtn.style.backgroundColor = '#ff69b4';
            }, 200);

            // Показываем или скрываем текст
            info.classList.toggle('show');
            
            if (info.classList.contains('show')) {
                actionBtn.textContent = 'Скрыть';
            } else {
                actionBtn.textContent = 'узнать больше';
            }
        });
    }
});
