gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from(".hero-center", {
  duration: 1,
  y: "5vh",
  opacity: 0,
  ease: "back",
});
tl.from(".hero-left", {
  duration: 1,
  y: "5vh",
  opacity: 0,
  ease: "back",
});
tl.from(".hero-right", {
  duration: 1,
  y: "5vh",
  opacity: 0,
  ease: "back",
});
tl.from(".nav", {
  duration: 1,
  y: -10,
  ease: "back",
  opacity: 0,
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "10% top",
    end: "bottom top",
    scrub: 0.3,
    // pin: true,
    pinSpacing: false,
    markers: true,
  },
});

tl2.to(
  ".hero-right",
  {
    x: "50vw",
  },
  "start"
);

tl2.to(
  ".hero-left",
  {
    x: "-50vw",
  },
  "start"
);

const centertimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-center",
    start: "top top",
    endTrigger: ".hero",
    end: "bottom top",
    scrub: 0.3,
    pin: true,
  },
});

centertimeline.to(".hero", {
  backgroundColor: "brown",
});

centertimeline.to(".hero-center", {
  scale: 0,
});

const sectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top bottom",
    scrub: 0.3,
  },
});

// sectionTimeline.to(".section", {
//   backgroundColor: "#f5f5f5",
//   duration: 1,
// });

sectionTimeline.to(".section", {
  backgroundColor: "brown",
});

// const tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section",
//     start: "top bottom",
//     scrub: true,
//     end: "bottom top",
//     markers: true,
//     pinSpacing: false,
//   },
// });

// tl3.from(".section", {
//   backgroundColor: "f5f5f5",
//   opacity: 0,
// });

// tl3.to(".section", {
//   opacity: 1,
//   backgroundColor: "brown",
// });
