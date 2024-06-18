
var tl = gsap.timeline();


tl.to(".loading", {
    opacity: 1,
    stagger: {
        each:0.14,
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
.to(".loads",{
    display:"none"
})
.to("body",{
    backgroundColor:"white",
    duration:0.01,
    ease:"linear"
    
})
.to(".name",{
    onStart:function(){
        $(".name").scramble(3000, 50, "alphabet", true);
    }

},'same')
.to(".info",{
    onStart:function(){
        $(".info").scramble(3000, 50, "alphabet", true);
    }

},'same')
.to(".contact",{
    onStart:function(){
        $(".contact").scramble(3000, 50, "alphabet", true);
    }

},'same')