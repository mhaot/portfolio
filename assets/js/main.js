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
    window.addEventListener('scroll', function() {
        const CaptionWithLinkLine = document.querySelector('.c-text__captionWithLink');
        const rect = CaptionWithLinkLine.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            CaptionWithLinkLine.classList.add('scrolled');
        } else {
            CaptionWithLinkLine.classList.remove('scrolled');
        }
    });

}




