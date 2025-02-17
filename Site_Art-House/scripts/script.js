// Получаем изображения по классам
const images = document.querySelectorAll('.project-img ');

// Добавляем события для каждого изображения
images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(0.9)'; // Уменьшаем размер до 90%
        img.style.transition = 'transform 0.3s ease'; // Добавляем плавность изменения
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // Возвращаем оригинальный размер
    });
});
