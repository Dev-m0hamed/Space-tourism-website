const openMenu = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const navMenu = document.getElementById("navMenu");
openMenu.addEventListener("click", () => {
  navMenu.classList.add("-translate-x-full");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("-translate-x-full");
});


/* function splitLettersKeepWords(element) {
  const text = element.textContent.replace(/\s+/g, " ").trim();
  element.textContent = "";

  const words = text.split(" ");
  words.forEach((word, i) => {
    const wordWrap = document.createElement("span");
    wordWrap.style.display = "inline-block";
    wordWrap.style.whiteSpace = "nowrap";

    for (const ch of word) {
      const chSpan = document.createElement("span");
      chSpan.textContent = ch;
      chSpan.style.display = "inline-block";
      chSpan.style.opacity = 0;
      wordWrap.appendChild(chSpan);
    }
    element.appendChild(wordWrap);

    if (i < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });
}

function splitWords(element) {
  const text = element.textContent.trim();
  const words = text.split(" ");
  element.textContent = "";
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    span.style.opacity = 0;
    element.appendChild(span);
    if (i < words.length - 1) element.appendChild(document.createTextNode(" "));
  });
}

window.addEventListener("load", () => {
  const h1 = document.getElementById("heading");
  const h2 = document.getElementById("space");
  const p = document.getElementById("intro");

  splitWords(h1);
  splitWords(h2);
  splitLettersKeepWords(p);

  gsap.fromTo(
    h1.querySelectorAll("span"),
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.15,
      delay: 0.5,
      ease: "power3.out",
    }
  );

  gsap.fromTo(
    h2.querySelectorAll("span"),
    { rotationX: 90, opacity: 0 },
    {
      rotationX: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      delay: 2,
      transformOrigin: "bottom",
      ease: "back.out(1.7)",
    }
  );

  gsap.to(p.querySelectorAll("span"), {
    opacity: 1,
    duration: 0.03,
    stagger: 0.03,
    delay: 3,
    ease: "power1.out",
  });
}); */
