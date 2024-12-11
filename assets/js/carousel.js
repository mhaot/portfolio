// carousel.js
export function initCarousel() {
    let currentIndex = 0; // 初期インデックス設定
    const slides = document.querySelectorAll('.l-carousel__slides--item'); // スライド要素
    const indicators = document.querySelectorAll('.c-btn__indicator'); // インジケーター

    // 初期スライド表示
    showSlide(currentIndex);

    // スライド表示
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
            indicators[i].classList.toggle('active', i === index);
        });
    }

    // インジケータークリック
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });


    let angle = 0;

    function drawCircle() {
        if (angle < 365) {
            angle += 2;

            // 背景画像
            indicators.forEach(btn => {
                btn.style.backgroundImage = `conic-gradient(transparent ${angle}deg, white ${angle + 1}deg, transparent ${angle + 2}deg)`;
            });

            requestAnimationFrame(drawCircle);
        } else {
            console.log("アニメーションが終了しました");
        }
    }

    requestAnimationFrame(drawCircle);
}