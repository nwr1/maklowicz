function idźDoWideo() {
    document.getElementById('screen-intro').classList.add('hidden');
    setTimeout(() => document.getElementById('screen-video').classList.add('active'), 500);
}

function idźDoBio() {
    // Удаляем класс active, если он был, чтобы скрыть видео-экран корректно
    document.getElementById('screen-video').classList.remove('active'); 
    document.getElementById('screen-video').classList.add('ukryty');
    
    setTimeout(() => {
        document.getElementById('screen-bio').classList.add('active');
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        
        // Дополнительно: ставим видео на паузу, если пользователь нажал пропустить
        const video = document.getElementById('myVideo');
        if (!video.paused) {
            video.pause();
        }
    }, 350);
}

function startPreloadedVideo() {
    const video = document.getElementById('myVideo');
    const zone = document.getElementById('uploadZone');
    
    // Скрываем плашку "Нажмите, чтобы посмотреть видео"
    zone.style.display = 'none';
    
    // Показываем плеер (опираемся на твой CSS класс loaded)
    video.classList.add('loaded');
    
    // Принудительно включаем звук
    video.muted = false; 
    
    // Запускаем воспроизведение
    video.play();

    // Автоматический переход к биографии, когда видео закончится
    video.onended = () => {
        idźDoBio();
    };
}