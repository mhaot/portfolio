export function initCarousel() {
    const carousel = document.querySelector('.l-carousel');
    const slides = document.querySelectorAll('.l-carousel__slides--item');
    const indicators = document.querySelectorAll('.c-btn__indicator');
    let currentIndex = 0;
    const slideDelay = 7000;

// スライドをアクティブ化する関数
function activateSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
    });
}

// DOMが読み込まれたら処理を開始
document.addEventListener('DOMContentLoaded', () => {
    if (!slides.length) {
    console.error("No slides found!");
    return;
    }

    // 最初のスライドを設定
    activateSlide(currentIndex);  // ここで最初のスライドにアクティブを付ける

    // 最初のボーダーアニメーションを開始
    carousel.classList.add('animate-border');

    // ボーダーアニメーション後にスライドを自動で切り替え
    setTimeout(() => {
    carousel.classList.remove('animate-border'); // ボーダーアニメーションが終わったらクラスを削除

    // スライドの自動切り替え開始
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        activateSlide(currentIndex);
    }, slideDelay);
    }, 1700); // ボーダーのアニメーション時間を待つ（1.7秒）
    });
}