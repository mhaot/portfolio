export function initMain(){
    document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".u-fadein");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // 順番に遅延を追加
            setTimeout(() => {
            entry.target.classList.add("show");
            }, index * 200); // 200msずつ遅れさせる
            observer.unobserve(entry.target);
        }
        });
    }, { threshold: 0.1 });

    fadeIns.forEach((fadeIn) => observer.observe(fadeIn));
    });

};