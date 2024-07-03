const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

VANTA.WAVES({
    el: "#globes",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
})



var tl = gsap.timeline();


tl.to(".loading", {
    opacity: 1,
    stagger: {
        each: 0.14,
        yoyo: true,
        repeat: 1
    }
})

tl.to(".text-loader", {
    opacity: 1,
    duration: 0.2,
    stagger: {
        each: 0.11,
        yoyo: true,
        repeat: 1
    }

})
    .to(".loads", {
        display: "none"
    })

    .to(".name", {
        onStart: function () {
            $(".name").scramble(3000, 50, "alphabet", true);
        }

    }, 'same')
    .to(".info", {
        onStart: function () {
            $(".info").scramble(3000, 50, "alphabet", true);
        }

    }, 'same')
    .to(".contact", {
        onStart: function () {
            $(".contact").scramble(3000, 50, "alphabet", true);
        }

    }, 'same')

tl.to(".main", {
    opacity: 1,
    width: "90%",
    scrollTrigger: {
        trigger: ".main",
        // markers: true,
        // scroller: "",
        start: "top 60%",
        end: "top 20%",
        scrub: 2,
        yoyo: true,
    }
})

gsap.to(".myskills", {
   y:-40,
    opacity: 1,
    scrollTrigger: {
        trigger: ".myskills",
        // markers: true,
        start: "50% 71%",
        end: "50% 50%",
        scrub: true,
        duration: 0.9,
    }
},'sc')

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "top 68%",
        end: "top 50%",
        // markers: true,
        scrub: true,
    }
},'sc');

tl2.to("#mysql", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2
})

tl2.to("#html", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2


})

tl2.to("#php", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})
tl2.to("#css", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})
tl2.to("#javascript", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})
tl2.to("#gsap", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})
tl2.to("#github", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})
tl2.to("#bootstrap", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})
tl2.to("#react", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.2

})