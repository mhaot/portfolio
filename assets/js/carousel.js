// carousel.js
export function initCarousel() {

// if (window.innerWidth <= 320) {
//     document.querySelectorAll('p').forEach(p => {
//         p.innerHTML = p.innerHTML.replace(/、/g, '、<br>').replace(/。/g, '。<br>');
//     });
//     }

let currentIndex = 0; // 初期インデックスを設定、最初に表示するスライドのインデックス(0番目のスライド)
const slides = document.querySelectorAll('.l-carousel__slides--item'); //スライドの要素を全て取得
const indicators = document.querySelectorAll('.c-btn__indicator'); //インジケーターの要素を全て取得

showSlide(currentIndex); // 初期スライドを表示→最初にスライドを呼び出す関数を呼んで、最初のスライドを表示

function showSlide(index) { // 初期スライドを表示する関数
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'; // 各スライドが今のインデックスと一致したら表示('block')、しない非表示('none')
        indicators[i].classList.toggle('active', i === index); // 各スライドが今のインジケーターと一致したら色変える(::active)
    });
}

function nextSlide() { // 次のスライドを表示する関数
    currentIndex = (currentIndex + 1) % slides.length; // 次のインデックスに進む。スライドのレングス超えたら最初に戻る
    showSlide(currentIndex); // 新しいスライドの表示
}

indicators.forEach((indicator, i) => { // インジケーターをクリックしたらスライドを表示する
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

}

