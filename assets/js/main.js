// export function initMain(){
//     document.addEventListener("DOMContentLoaded", () => {
//     const fadeIns = document.querySelectorAll(".u-fadein");

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             setTimeout(() => {
//             entry.target.classList.add("show");
//             }, index * 200);
//             observer.unobserve(entry.target);
//         }
//         });
//     }, { threshold: 0.1 });

//     fadeIns.forEach((fadeIn) => observer.observe(fadeIn));
//     });

// };


export function initMain(){
    document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".u-fadein");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add("show");
            }, index * 200);
            observer.unobserve(entry.target);
        }
        });
    }, { threshold: 0.1 });

    fadeIns.forEach((fadeIn) => observer.observe(fadeIn));
    });

};


export function initCaptionWithLinkAnimation() {
    document.addEventListener("DOMContentLoaded", () => {
        const caption = document.querySelector(".c-text__captionWithLink");

        // Intersection Observerのオプション
        const options = {
            root: null, // ビューポートを基準に監視
            rootMargin: "0px", // 余白なし
            threshold: 0.5, // 要素が50%見えたら発火
        };

        // Intersection Observerのコールバック関数
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 要素がビューポートに入ったらクラスを追加
                    caption.classList.add("-show");
                }
            });
        };

        // Intersection Observerを作成してターゲットを監視
        const observer = new IntersectionObserver(callback, options);
        observer.observe(caption);
    });
}

