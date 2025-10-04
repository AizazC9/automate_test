// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize GSAP animations
  initAnimations();
});

function initAnimations() {
  // Animate hero left content
  gsap.to(".hero__left", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });

  // Animate hero right visual
  gsap.to(".hero__right", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.4,
  });

  // Animate subtitle
  gsap.from(".hero__subtitle", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.3,
  });

  // Animate title words
  gsap.from(".hero__title", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    delay: 0.5,
  });

  // Animate description
  gsap.from(".hero__description", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.7,
  });

  // Animate rider image
  gsap.from(".hero__rider", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power3.out",
    delay: 0.8,
  });

  // Animate burger card
  gsap.to(".hero__card--burger", {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 1.2,
  });

  gsap.from(".hero__card--burger", {
    x: -100,
    y: 50,
  });

  // Animate delivery card
  gsap.to(".hero__card--delivery", {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 1.4,
  });

  gsap.from(".hero__card--delivery", {
    x: 100,
    y: -50,
  });

  // Animate stats with stagger - trigger on scroll
  gsap.to(".hero__stat", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".hero__stats",
      start: "top 80%",
      once: true,
      onEnter: () => {
        // Start number animations when stats become visible
        animateNumbers();
      },
    },
  });

  gsap.from(".hero__stat", {
    y: 50,
  });

  // About Section Animations
  initAboutAnimations();

  // Mission Section Animations
  initMissionAnimations();

  // Journey Section Animations
  initJourneyAnimations();

  // Partners Section Animations
  initPartnersAnimations();

  // Press Section Animations
  initPressAnimations();
}

function initAboutAnimations() {
  // Animate about image on scroll
  gsap.to(".about__image-wrapper", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about__image-wrapper",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".about__image-wrapper", {
    x: -100,
  });

  // Animate about text on scroll
  gsap.to(".about__text", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about__text",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".about__text", {
    x: 100,
  });

  // Animate subtitle
  gsap.from(".about__subtitle", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about__subtitle",
      start: "top 85%",
      once: true,
    },
  });

  // Animate title
  gsap.from(".about__title", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about__title",
      start: "top 85%",
      once: true,
    },
  });

  // Animate description
  gsap.from(".about__description", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about__description",
      start: "top 85%",
      once: true,
    },
  });
}

function initMissionAnimations() {
  // Animate mission text on scroll
  gsap.to(".mission__text", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission__text",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".mission__text", {
    x: -100,
  });

  // Animate mission image on scroll
  gsap.to(".mission__image-wrapper", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission__image-wrapper",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".mission__image-wrapper", {
    x: 100,
  });

  // Animate subtitle
  gsap.from(".mission__subtitle", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission__subtitle",
      start: "top 85%",
      once: true,
    },
  });

  // Animate title
  gsap.from(".mission__title", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission__title",
      start: "top 85%",
      once: true,
    },
  });

  // Animate description
  gsap.from(".mission__description", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mission__description",
      start: "top 85%",
      once: true,
    },
  });
}

function initJourneyAnimations() {
  // Animate journey left content
  gsap.to(".journey__left", {
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".journey__left",
      start: "top 80%",
      once: true,
    },
  });

  // Animate each journey card with stacking effect
  const cards = gsap.utils.toArray(".journey__card");

  cards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });
}

function initPartnersAnimations() {
  // Animate partners header
  gsap.to(".partners__header", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".partners__header",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".partners__header", {
    y: 50,
  });

  // Animate partner items with stagger
  const items = gsap.utils.toArray(".partners__item");

  items.forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.2,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        once: true,
      },
    });
  });
}

function initPressAnimations() {
  // Animate press header
  gsap.to(".press__header", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".press__header",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".press__header", {
    y: 50,
  });

  // Animate press cards with stagger
  const cards = gsap.utils.toArray(".press__card");

  cards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.15,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });
}

// Parallax effect on scroll for burger and delivery cards
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  // Burger card moves slightly down based on scroll
  gsap.to(".hero__card--burger", {
    y: scrolled * 0.1,
    duration: 0.3,
    ease: "power1.out",
  });

  // Delivery card moves up based on scroll (negative value)
  gsap.to(".hero__card--delivery", {
    y: scrolled * -0.15,
    duration: 0.3,
    ease: "power1.out",
  });
});

function animateNumbers() {
  const statNumbers = document.querySelectorAll(".hero__stat-number");

  statNumbers.forEach((number, index) => {
    const target = parseFloat(number.getAttribute("data-target"));
    const duration = 2;
    const isDecimal = target % 1 !== 0;

    gsap.to(number, {
      innerHTML: target,
      duration: duration,
      ease: "power2.out",
      delay: index * 0.1,
      snap: isDecimal ? { innerHTML: 0.1 } : { innerHTML: 1 },
      onUpdate: function () {
        const currentValue = parseFloat(number.innerHTML);
        if (isDecimal) {
          number.innerHTML = currentValue.toFixed(1);
        } else {
          number.innerHTML = Math.floor(currentValue);
        }
      },
    });
  });
}
