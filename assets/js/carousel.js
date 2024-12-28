export function initCarousel() {
    const carousel = document.querySelector('.l-carousel');
    const slides = document.querySelectorAll('.l-carousel__slides--item');
    const indicators = document.querySelectorAll('.c-btn__indicator');
    let currentIndex = 0;
    const slideDelay = 7000;

    function activateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
                resetIndicatorAnimation(indicator);
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function resetIndicatorAnimation(indicator) {
        const circle = indicator.querySelector('circle');
        circle.style.animation = 'none';
        requestAnimationFrame(() => {
            circle.style.animation = '';
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (!slides.length) {
            console.error("No slides found!");
            return;
        }

        activateSlide(currentIndex);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            activateSlide(currentIndex);
        }, slideDelay);
    });
}