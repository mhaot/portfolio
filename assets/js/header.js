// .l-header__drawer
export function initHeader() {
    const drawerItems = [
        { title: "PRODUCTS", subtitle: "商品情報", link: "#", hasChevron: true },
        { title: "NEWS", subtitle: "ニュース", link: "#", hasChevron: false },
        { title: "STORE/ONLINE", subtitle: "店舗/オンライン", link: "#", hasChevron: false },
        { title: "BOSC TREEDAY 2024", subtitle: "BOSCとひのきの森の、美しい循環", link: "#", hasChevron: false },
        { title: "SKINCARE RENEWAL", subtitle: "スキンケア商品リニューアル", link: "#", hasChevron: false },
        { title: "ABOUT US", subtitle: "BOSCについて", link: "#", hasChevron: true },
        { title: "BOSC MEMBERSSHIP", subtitle: "メンバーシップ", link: "#", hasChevron: false }
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
    document.addEventListener('DOMContentLoaded', () => {
        generateDrawerNav();
    });


    // .l-header__top
    document.addEventListener('DOMContentLoaded', function () {
    const newsList = document.querySelector('.l-header__news');
    let newsItems = document.querySelectorAll('.l-header__news li');
    const itemHeight = newsItems[0].offsetHeight;
    let index = 0;

    newsItems.forEach(item => {
        const icon = document.createElement('i');
        icon.className = 'c-deco__chevronLeft';
        item.appendChild(icon);
    });

    const lastItemClone = newsItems[newsItems.length - 1].cloneNode(true);
    newsList.insertBefore(lastItemClone, newsItems[0]);

    newsItems = document.querySelectorAll('.l-header__news li');

    function slideNews() {
        index++;
        newsList.style.transition = 'transform 2.5s ease';
        newsList.style.transform = `translateY(-${index * itemHeight}px)`;

        if (index === newsItems.length - 1) {
        setTimeout(() => {
            newsList.style.transition = 'none';
            newsList.style.transform = `translateY(0)`;
            index = 0;
        }, 2500);
        }
    }
    setInterval(slideNews, 5000);
    });


// .l-header__drawer
document.addEventListener('DOMContentLoaded', () => {
    const drawerBtn = document.querySelector('.l-header__drawer-btn'); // 開くボタン
    const closeBtn = document.querySelector('.l-header__drawer-btn__close'); // 閉じるボタン
    const drawer = document.querySelector('.l-header__drawer'); // ドロワー全体
    const drawerInner = document.querySelector('.l-header__drawerInner'); // 背景部分
    const overlay = document.querySelector('.l-header__overlay'); // オーバーレイ
    const drawerTexts = document.querySelectorAll('.l-header__drawerText > *'); // テキスト
    
    // ドロワーを開く
    function openDrawer() {
      drawer.classList.add('is-active');
      overlay.classList.add('is-active');
      
      // 背景をスライドイン
      setTimeout(() => {
        drawerInner.classList.add('is-visible'); // 背景表示
      }, 500); // 背景のスライドイン時間（0.5秒）
      
      // 背景がスライドインした後にテキストを順番に表示
      setTimeout(() => {
        drawerTexts.forEach((text, index) => {
          text.style.transitionDelay = `${index * 0.1}s`; // テキストごとの遅延
          text.classList.add('is-visible'); // テキスト表示
        });
      }, 1500); // 背景スライドイン後、1.5秒後にテキスト表示
    }
    
    // ドロワーを閉じる
    function closeDrawer() {
      drawer.classList.add('is-closing');  // 閉じるアニメーション用クラス
      drawerInner.classList.add('is-closing');
  
      // 閉じるアニメーション完了後、クラスをリセット
      setTimeout(() => {
        drawer.classList.remove('is-active', 'is-closing');
        overlay.classList.remove('is-active');
        drawerInner.classList.remove('is-visible', 'is-closing');
        
        // テキストアニメーションをリセット
        drawerTexts.forEach((text) => {
          text.classList.remove('is-visible');
          text.style.transitionDelay = '0s';
        });
      }, 500); // アニメーションが終わったタイミングでクラスをリセット
    }
  
    // イベントリスナー登録
    drawerBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
  });

}
