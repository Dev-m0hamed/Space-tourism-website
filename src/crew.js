const openMenu = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const navMenu = document.getElementById("navMenu");
openMenu.addEventListener("click", () => {
  navMenu.classList.add("-translate-x-full");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("-translate-x-full");
});

const tl = gsap.timeline({
  defaults: { ease: "power2.out" },
});

tl.from("#heading", {
  opacity: 0,
  scale: 0.8,
  transformOrigin: "center center",
  duration: 1.3,
  delay: 0.2,
})

  .from(
    "#content",
    {
      opacity: 0,
      y: -40,
      duration: 1.4,
    },
    "-=0.6"
  )

  .from(
    "#img",
    {
      opacity: 0,
      y: 60,
      duration: 1.5,
    },
    "<"
  )

  .from(
    "#paginations",
    {
      opacity: 0,
      scale: 0.8,
    },
    "-=0.7"
  );
