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


export function initMain() {
    document.addEventListener("DOMContentLoaded", () => {
        // fade-in アニメーション
        const fadeIns = document.querySelectorAll(".u-fadein");
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeIns.forEach((fadeIn) => fadeInObserver.observe(fadeIn));

        // .c-text__captionWithLink の縦線アニメーション
        const caption = document.querySelector(".c-text__captionWithLink");
        if (caption) {
            const captionOptions = {
                root: null,
                rootMargin: "0px 0px 300px 0px",
                threshold: 0.1,
            };
            const captionCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        caption.classList.add("-show");
                    }
                });
            };
            const captionObserver = new IntersectionObserver(captionCallback, captionOptions);
            captionObserver.observe(caption);
        }
    });
}