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

const filled = document.querySelector(".filled");
function update(){
    filled.style.width=`${((window.scrollY)/ (document.body.scrollHeight - window.innerHeight)*100)}%`
    requestAnimationFrame(update);
}

update();


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
        start: "top 190%",
        end: "top 140%",
        scrub: true,
        yoyo: true,
    }
})

gsap.to(".myskills", {
   y:-80,
    opacity: 1,
    scrollTrigger: {
        trigger: ".myskills",
        // markers: true,
        start: "top 185%",
        end: "top 150%",
        scrub: true,
        duration: 0.9,
    }
},'sc')

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "top 180%",
        end: "top 140%",
        markers: true,
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