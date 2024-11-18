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
        { img: "assets/images/product.menu01.jpg", text: "SKIN", subtext: "スキンケア" },
        { img: "assets/images/product.menu02.jpg", text: "MIND", subtext: "フレグランス" },
        { img: "assets/images/product.menu03.jpg", text: "HAND&BODY", subtext: "ハンド＆ボディー" },
        { img: "assets/images/product.menu04.jpg", text: "GOODS", subtext: "グッズ" },
        { img: "assets/images/product.menu05.jpg", text: "GIFT", subtext: "ギフト" },
    ];

    function generateProductMenu() {
        const menuContainer = document.querySelector('.l-products__menu .l-products__list');
        if (!menuContainer) return;

        productsMenuList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('l-products__item');

            const anchor = document.createElement('a');
            anchor.href = "#";

            const img = document.createElement('img');
            img.classList.add('c-img');
            img.src = item.img;
            img.alt = item.text;

            const captionContainer = document.createElement('div');
            captionContainer.classList.add('l-products__caption');

            const title = document.createElement('p');
            title.textContent = item.text;

            const subTitle = document.createElement('p');
            subTitle.classList.add('c-fs__10');
            subTitle.textContent = item.subtext;

            // <i class="c-deco__stickarrow"></i>
            const stickArrow = document.createElement('i');
            stickArrow.classList.add('c-deco__stickarrow');

            captionContainer.appendChild(title);
            captionContainer.appendChild(stickArrow);
            captionContainer.appendChild(subTitle);

            anchor.appendChild(img);
            anchor.appendChild(captionContainer);
            listItem.appendChild(anchor);
            menuContainer.appendChild(listItem);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        generateProductMenu();
        console.log('productDOM読み込み確認');
    });
}



