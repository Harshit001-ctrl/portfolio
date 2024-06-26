
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
    
   

VANTA.GLOBE({
    el: "#globes",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
})
