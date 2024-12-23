export function initMain(){
    document.addEventListener("DOMContentLoaded", () => {
        const mainFadeIn = document.querySelector("main.u-fadein");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            });
        }, { threshold: 0.1 }); // 10%が見えたらトリガー

        observer.observe(mainFadeIn);
        });
};