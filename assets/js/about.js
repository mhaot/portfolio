export function initAbout() {
    const aboutMenuList = [
        { img: "assets/images/about.menu01.jpg", text: "PHILOSOPHY", subtext: "哲学" },
        { img: "assets/images/about.menu02.jpg", text: "FOREST BATHING EXPERIENCE", subtext: "森林浴体験" },
        { img: "assets/images/about.menu03.jpg", text: "SCENT", subtext: "香り" },
        { img: "assets/images/about.menu04.jpg", text: "PACKAGE", subtext: "サステナビリティ" },
        { img: "assets/images/about.menu05.jpg", text: "SUSTAINABILITY", subtext: "ギフト" },
        { img: "assets/images/about.menu06.jpg", text: "DISCOVERY", subtext: "BOSCの知見" },

    ];


    function generateAboutMenu() {
        const menuContainer = document.querySelector('.l-about__menu .l-about__list');
        if (!menuContainer) return;

        aboutMenuList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('l-about__item');

            const anchor = document.createElement('a');
            anchor.href = "#";

            const img = document.createElement('img');
            img.classList.add('c-img');
            img.src = item.img;
            img.alt = item.text;

            const captionContainer = document.createElement('div');
            captionContainer.classList.add('c-text__link');

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
        generateAboutMenu();
        console.log('aboutDOM読み込み確認');
    });
}



