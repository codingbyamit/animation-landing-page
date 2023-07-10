let tl = gsap.timeline();

tl.from("#image>img,#links>ul,#buttons>button", {
    y: -100,
    duration: 1,
    opacity: 0,
    delay: 0.5,
    stagger: 0.3,
});

tl.from("#headings>h1", {
    y: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    yoyo: true,
});

tl.from("#play-button", {
    x: 100,
    opacity: 0,
    duration: 1,
});
tl.from("#images img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3,
});

tl.to("#scroll-down", {
    y: 20,
    yoyo: true,
    repeat: -1,
    duration: 0.7,
});
