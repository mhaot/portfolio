// carousel.js
export function initCarousel() {

let currentIndex = 0; // 初期インデックス設定
const slides = document.querySelectorAll('.l-carousel__slides--item'); // スライド要素の取得
const indicators = document.querySelectorAll('.c-btn__indicator'); // インジケーター要素の取得

showSlide(currentIndex); // 初期スライド表示

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'; // インデックス一致時に表示
        indicators[i].classList.toggle('active', i === index); // インジケーターをアクティブに
    });
}

indicators.forEach((indicator, i) => { // インジケータークリック時
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex); // 選択したスライドを表示
    indicators.forEach(ind => ind.classList.remove('active'));
        indicator.classList.add(('active'));
    });







    // const shape = document.querySelector(".c-btn__indicator");

    // //角度の初期状態(0°)
    // let angle = 0;

    // function drawCircle() {
    //     //角度が365°未満のとき
    //     if( angle < 365 ) {
    //         //角度を2°ずつ増やす
    //         angle += 2;
    //         //角度をconic-gradientの角度に代入
    //         shape.style.backgroundImage = `conic-gradient(black ${angle}deg, white ${angle}deg)`;            //requestAnimationFrameを再度呼び出す
    //         requestAnimationFrame(drawCircle);
    //     } else {
    //         console.log("アニメーションが終了しました");
    //     }
    // }

    // //アニメーションを開始
    // requestAnimationFrame(drawCircle);


});


// if (window.innerWidth <= 320) {
//     document.querySelectorAll('p').forEach(p => {
//         p.innerHTML = p.innerHTML.replace(/、/g, '、<br>').replace(/。/g, '。<br>');
//     });
//     }

}

