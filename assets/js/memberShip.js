export function initMemberShip() {
    document.addEventListener("DOMContentLoaded", () => {
        const deco = document.querySelector(".l-memberShip__deco");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    deco.classList.add("-show");
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(deco);
    });
}