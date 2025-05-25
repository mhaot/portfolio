// .l-header__drawer
export function initHeader() {
  const drawerItems = [
    { title: "PRODUCTS", subtitle: "商品情報", link: "#", hasChevron: true, subMenu: [
        { title: "ALL", subtitle: "一覧", link: "#" },
        { title: "SKIN", subtitle: "スキンケア", link: "#" },
        { title: "MIND", subtitle: "フレグランス", link: "#" },
        { title: "HAND&BODY", subtitle: "ハンド&ボディ", link: "#" },
        { title: "GOODS", subtitle: "グッズ", link: "#" },
        { title: "GIFT", subtitle: "ギフト", link: "#" }
    ]},
    { title: "NEWS", subtitle: "ニュース", link: "#", hasChevron: false },
    { title: "STORE/ONLINE", subtitle: "店舗/オンライン", link: "#", hasChevron: false },
    { title: "BOSC TREEDAY 2024", subtitle: "BOSCとひのきの森の、美しい循環", link: "#", hasChevron: false },
    { title: "SKINCARE RENEWAL", subtitle: "スキンケア商品リニューアル", link: "#", hasChevron: false },
    { title: "ABOUT US", subtitle: "BOSCについて", link: "#", hasChevron: true, subMenu: [
        { title: "PHILOSOPHY", subtitle: "哲学", link: "#" },
        { title: "FOREST BATHING EXPERIENCE", subtitle: "森林浴体験", link: "#" },
        { title: "SCENT", subtitle: "香り", link: "#" },
        { title: "PACKAGE", subtitle: "パッケージ", link: "#" },
        { title: "SUSTAINABILITY", subtitle: "サステナビリティ", link: "#" },
        { title: "DISCOVERY", subtitle: "BOSCの知見", link: "#" }
    ]},
    { title: "BOSC MEMBERSSHIP", subtitle: "メンバーシップ", link: "#", hasChevron: false }
];

function generateDrawerNav() {
    const navContainer = document.querySelector('.l-header__drawerNav--toc');
    if (!navContainer) return;

    const fragment = document.createDocumentFragment();

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

        let chevronIcon = null;
        let subMenu = null;
        if (item.hasChevron) {
            chevronIcon = document.createElement('i');
            chevronIcon.classList.add('c-deco__chevronDown');
            listItem.appendChild(chevronIcon);

            if (item.subMenu) {
                subMenu = document.createElement('div');
                subMenu.classList.add('subMenu');

                item.subMenu.forEach(sub => {
                    const subAnchor = document.createElement('a');
                    subAnchor.href = sub.link;

                    const lineDecoration = document.createElement('i');
                    lineDecoration.classList.add('c-deco__line');

                    const subTitle = document.createElement('p');
                    subTitle.classList.add('c-title__14');
                    subTitle.textContent = sub.title;

                    const subSubtitle = document.createElement('p');
                    subSubtitle.classList.add('c-fs__10');
                    subSubtitle.textContent = sub.subtitle;

                    subAnchor.insertBefore(lineDecoration, subAnchor.firstChild);

                    subAnchor.appendChild(subTitle);
                    subAnchor.appendChild(subSubtitle);
                    subMenu.appendChild(subAnchor);
                });

                listItem.appendChild(subMenu);

                chevronIcon.addEventListener("click", () => {
                    if (listItem.classList.contains('open')) {
                        listItem.classList.remove('open');
                    } else {
                        listItem.classList.add('open');
                    }
                });
            }
        }

        fragment.appendChild(listItem);
    });

    navContainer.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
    generateDrawerNav();
});

// .l-header__drawer
document.addEventListener('DOMContentLoaded', () => {
    const drawerBtn = document.querySelector('.l-header__drawer-btn');
    const closeBtn = document.querySelector('.l-header__drawer-btn__close');
    const drawer = document.querySelector('.l-header__drawer');
    const drawerInner = document.querySelector('.l-header__drawerInner');
    const overlay = document.querySelector('.l-header__overlay');
    const drawerTexts = document.querySelectorAll('.l-header__drawerText > *');

    // ドロワーを開く
    function openDrawer() {
      drawer.classList.add('is-active');
      overlay.classList.add('is-active');

      setTimeout(() => {
        drawerInner.classList.add('is-visible'); // 背景表示
      }, 500);

      // 背景がスライドインした後にテキストを順番に表示
      setTimeout(() => {
        drawerTexts.forEach((text, index) => {
          text.style.transitionDelay = `${index * 0.1}s`; // テキストごとの遅延
          text.classList.add('is-visible');
        });
      }, 1500); // 背景スライドイン後、1.5秒後にテキスト表示
    }

    function closeDrawer() {
      drawer.classList.add('is-closing');
      drawerInner.classList.add('is-closing');

      // 閉じるアニメーション完了後、クラスとテキストアニメーションをリセット
      setTimeout(() => {
        drawer.classList.remove('is-active', 'is-closing');
        overlay.classList.remove('is-active');
        drawerInner.classList.remove('is-visible', 'is-closing');

        drawerTexts.forEach((text) => {
          text.classList.remove('is-visible');
          text.style.transitionDelay = '0s';
        });
      }, 500);
    }
    drawerBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
  });







document.addEventListener('DOMContentLoaded', () => {
  const newsItems = document.querySelectorAll('.l-header__news li');
  let currentIndex = 0;

  // 最初の <li> 要素に active クラスを追加
  newsItems[currentIndex].classList.add('active');

  function updateActiveClass() {
    // 現在の <li> 要素から active クラスを削除し、exiting クラスを追加
    newsItems[currentIndex].classList.remove('active');
    newsItems[currentIndex].classList.add('exiting');

    // 次の <li> 要素のインデックスを計算
    currentIndex = (currentIndex + 1) % newsItems.length;

    // 次の <li> 要素に active クラスを追加
    newsItems[currentIndex].classList.add('active');

    // 前の <li> 要素から exiting クラスを削除
    setTimeout(() => {
      newsItems[currentIndex].classList.remove('exiting');
    }, 2000); // アニメーションの時間に合わせて調整
  }

  // 3秒ごとに updateActiveClass 関数を実行
  setInterval(updateActiveClass, 3000);
});



}
