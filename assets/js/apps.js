// apps.jsにまとめてindex.htmlのbodyの閉じタグ前に
// <script type="module" src="assets/js/apps.js"></script>

// apps.js書き方
// import { initCarousel } from './carousel.js'; // {関数名}from'ファイル名';
// import { initHeader } from './header.js';
// import { initMain } from './main.js';
// import { initFooter } from './footer.js';
// initHeader();
// initCarousel(); // 呼び出し';
// initMain();
// initFooter();
// // ↓増やしたファイルをその都度記述

// // carousel.js 各ファイルの上に記述
// export function initCarousel() {
//     // carouselの初期化処理
// }
// export function initCarousel() {
//     const container = document.querySelector('.carousel-container'); // HTMLのクラス名を指定
//     // 初期化や操作のコードをここに記述
//     }


// apps.js
import { initHeader } from './header.js';
import { initCarousel } from './carousel.js';
import { initProducts } from './products.js';
// import { initAbout } from './about.js';


    initHeader();
    initCarousel();
    initProducts();
   //  initAbout();

