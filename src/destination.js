const openMenu = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const navMenu = document.getElementById("navMenu");
openMenu.addEventListener("click", () => {
  navMenu.classList.add("-translate-x-full");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("-translate-x-full");
});


  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from("#heading", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2,
  })
    .from(
      "#img",
      {
        x: -100,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      "#content",
      {
        x: 100,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
      },
      "<"
    );

