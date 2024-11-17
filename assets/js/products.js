// window.addEventListener('scroll', function() {
//     const element = document.querySelector('.l-products__discription');
//     const scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     const triggerPosition = 100;

//     if (scrollPosition > triggerPosition) {
//         element.classList.add('scrolled');
//     } else {
//         element.classList.remove('scrolled');
//     }
//     });

export function initProducts() {
    const productsMenuList = [
        { img: "assets/images/product.menu01.jpg", text: "SKIN", subText: "スキンケア" },
        { img: "assets/images/product.menu02.jpg", text: "MIND", subText: "フレグランス" },
        { img: "assets/images/product.menu03.jpg", text: "HAND&BODY", subText: "ハンド＆ボディー" },
        { img: "assets/images/product.menu04.jpg", text: "GOODS", subText: "グッズ" },
    ];

    function generateProductMenu() {
        const menuContainer = document.querySelector('.l-products__menu .l-products__list');
        if (!menuContainer) return; // 念のため要素が存在するか確認

        productsMenuList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('l-products__item');

            const anchor = document.createElement('a');
            anchor.href = "#"; // 必要ならリンク先を指定

            const img = document.createElement('img');
            img.classList.add('c-img');
            img.src = item.img;
            img.alt = item.text;

            const captionContainer = document.createElement('div');
            captionContainer.classList.add('l-products__caption');

            const title = document.createElement('p');
            title.textContent = item.text;

            const subtitle = document.createElement('p');
            subtitle.classList.add('c-fs__10');
            subtitle.textContent = item.subText;

            captionContainer.appendChild(title);
            captionContainer.appendChild(subtitle);

            anchor.appendChild(img);
            anchor.appendChild(captionContainer);
            listItem.appendChild(anchor);
            menuContainer.appendChild(listItem);
        });
    }

    // DOMが完全に読み込まれた後に実行
    document.addEventListener('DOMContentLoaded', () => {
        generateProductMenu(); // メニューリストを生成
        console.log('aboutDOM読み込み確認');
    });
}



