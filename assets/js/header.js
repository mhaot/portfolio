// header.js

// .l-header__drawer
export function initHeader() {
    const drawerItems = [
        { title: "PRODUCTS", subtitle: "商品情報", link: "#", hasChevron: true },
        { title: "NEWS", subtitle: "ニュース", link: "#", hasChevron: false },
        { title: "STORE/ONLINE", subtitle: "店舗/オンライン", link: "#", hasChevron: false },
        { title: "BOSC TREEDAY 2024", subtitle: "BOSCとひのきの森の、美しい循環", link: "#", hasChevron: false },
        { title: "SKINCARE RENEWAL", subtitle: "スキンケア商品リニューアル", link: "#", hasChevron: false },
        { title: "ABOUT US", subtitle: "BOSCについて", link: "#", hasChevron: true },
        { title: "BOSC MEMBERSSHIP", subtitle: "", link: "#", hasChevron: false }
    ];

    function generateDrawerNav() {
        const navContainer = document.querySelector('.l-header__drawerNav--toc');
        drawerItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('l-header__drawerNav--tocItem');

            const anchor = document.createElement('a');
            anchor.href = item.link;

            const title = document.createElement('p');
            title.classList.add('c-title__16');
            title.textContent = item.title;

            const subtitle = document.createElement('p');
            subtitle.classList.add('c-fs__10');
            subtitle.textContent = item.subtitle;

            anchor.appendChild(title);
            anchor.appendChild(subtitle);
            listItem.appendChild(anchor);

            if (item.hasChevron) {
                const chevronIcon = document.createElement('i');
                chevronIcon.classList.add('c-deco__chevronDown');
                listItem.appendChild(chevronIcon);
            }

            navContainer.appendChild(listItem);
        });
    }
    // DOMが完全に読み込まれた後に実行
    document.addEventListener('DOMContentLoaded', () => {
        generateDrawerNav(); // ドロワーリストを生成
        console.log('DOM読み込み確認');
    });



    // .l-header__top
    document.addEventListener('DOMContentLoaded', function () {
    const newsList = document.querySelector('.l-header__news');
    let newsItems = document.querySelectorAll('.l-header__news li');
    const itemHeight = newsItems[0].offsetHeight; // 各お知らせの高さ
    let index = 0;

    // 各 li にアイコンを追加
    newsItems.forEach(item => {
        const icon = document.createElement('i');
        icon.className = 'c-deco__chevronLeft';
        item.appendChild(icon);
    });

    // 最後のアイテムをクローンして最初に追加
    const lastItemClone = newsItems[newsItems.length - 1].cloneNode(true);
    newsList.insertBefore(lastItemClone, newsItems[0]);

    // クローン追加後、再取得
    newsItems = document.querySelectorAll('.l-header__news li');

    function slideNews() {
        index++;
        newsList.style.transition = 'transform 2.5s ease';
        newsList.style.transform = `translateY(-${index * itemHeight}px)`;

        if (index === newsItems.length - 1) {
        // 最後のスライドが終わったら、最初に戻る
        setTimeout(() => {
            newsList.style.transition = 'none';
            newsList.style.transform = `translateY(0)`;
            index = 0;
        }, 2500); // スライドが終わるタイミングと合わせる
        }
    }

    // 5秒ごとにスライド
    setInterval(slideNews, 5000);
    });

// if (window.innerWidth <= 320) {
//     document.querySelectorAll('p').forEach(p => {
//         // 「、」があったら改行を追加
//         p.innerHTML = p.innerHTML.replace(/、/g, '、<br>');
//     });
//     }

}
