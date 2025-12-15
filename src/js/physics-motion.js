document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Floating Idle Motion
    // Applies to elements with 'float-element' class
    // We'll add this class to Hero elements and maybe some cards
    const floatElements = document.querySelectorAll('.float-element');
    floatElements.forEach((el, index) => {
        gsap.to(el, {
            y: "random(-10, 10)",
            rotation: "random(-2, 2)",
            duration: "random(2, 4)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2
        });
    });

    // 2. Hero Parallax
    // Name and Title move at different speeds
    gsap.to(".hero-title", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: 200,
        opacity: 0
    });

    gsap.to(".hero-subtitle", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: 1.5
        },
        y: 100, // Moves slower
        opacity: 0
    });

    // 3. Section Titles "Elastic" Reveal
    // As you scroll down, titles move slightly up to meet you
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                end: "top 50%",
                scrub: 1
            },
            y: 50,
            opacity: 0
        });
    });

    // 4. Card "Scatter" Assembly
    // Cards start slightly rotated and separated, then snap into place
    const cards = gsap.utils.toArray('.card');
    cards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
                toggleActions: "play none none reverse"
            },
            y: 100,
            rotation: "random(-5, 5)",
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "back.out(1.7)" // Elastic snap
        });
    });

    // 5. Experience Line Animation (Removed to fix overlap issue)
    /*
    gsap.utils.toArray('.border-l-2').forEach(line => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: "top 80%",
                triggerActions: "play none none reverse"
            },
            height: 0,
            duration: 1.5,
            ease: "power3.out"
        });
    });
    */
});
