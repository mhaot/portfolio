// header.js
export function initHeader() {
    // ドロワーリスト項目のデータを配列に定義
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
                chevronIcon.classList.add('c-chevronDown');
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



// if (window.innerWidth <= 320) {
//     document.querySelectorAll('p').forEach(p => {
//         // 「、」があったら改行を追加
//         p.innerHTML = p.innerHTML.replace(/、/g, '、<br>');
//     });
//     }

}