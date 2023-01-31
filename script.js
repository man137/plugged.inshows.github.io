

const cursor = document.querySelector(".circle-cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.addEventListener("click", () => {
  cursor.style.transform = "scale(2)";
});

document.addEventListener("mouseout", () => {
  cursor.style.transform = "scale(1)";
});



function fitVideo() {

    $('#video-viewport').width($('.fullsize-video-bg').width());
    $('#video-viewport').height($('.fullsize-video-bg').height());

    var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
    var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    $('video').width(scale * vid_w_orig);
    $('video').height(scale * vid_h_orig);

    $('#video-viewport').scrollLeft(($('video').width() - $('.fullsize-video-bg').width()) / 2);
    $('#video-viewport').scrollTop(($('video').height() - $('.fullsize-video-bg').height()) / 2);

};

gsap.from("#cus",{
x: 80,
ease: "power4.out",
duration: 1
})
gsap.from("#mad",{
    x:70,
    duration: 1,
    ease: "power4.out"
})
gsap.from("#live",{
    x:60,
    ease: "power4.out",
    duration: 1
})
gsap.from("#shows",{
    x:50,
    ease: "power4.out",
    duration: 1
})
gsap.from("#lorem",{
    x:80,
    duration: 1,
    ease: "power4.out"

})


gsap.to("#waves",{
    duration: 2,
    scrollTrigger: {

trigger: ".z",
scrub: true,
    },
    y: -80
})
gsap.to("#nav",{
    opacity: 1,
    duration: 1,
    scrollTrigger:{
        trigger: "#nav",
    start: "bottom -75%",
 
repeatRefresh: true,
scrub: 4,
duration: 1
    },

   
    opacity: 0,
    duration: 1,   
     y:-10,

})
gsap.from("#two svg",{
    opacity: 0,
    scrollTrigger:{
        start:"bottom -82%" ,
        
        
        trigger: "#two svg",
        scrub: 1
    },
    
    ease: "power2.out",
    
    
    })
    
gsap.from("#round",{
    opacity: 0,
    scrollTrigger:{
        start:"bottom -82%" ,
        
        
        trigger: "#round",
        scrub: 1
    },
    x: 40,
    ease: "power2.out",
    })
 
  
    gsap.from("#graphics ",{
        
    
        scrollTrigger:{
            trigger:"#line",
            
            scrub:5,
            duration:3,
            start: "bottom -82%"
        },
        rotate: 50,
        x: 40
        })
        
     
        const element = document.querySelector("#bod");
const elem = document.querySelector("#lol")
        element.addEventListener("mouseover", function() {
          elem.style.opacity = 1;
    
        });
        
        element.addEventListener("mouseout", function() {
          elem.style.opacity = 0;
        });
        

        const elt = document.querySelector("#bodo");
        const ele = document.querySelector("#oll")
                elt.addEventListener("mouseover", function() {
                  ele.style.opacity = 1;
            
                });
                
                elt.addEventListener("mouseout", function() {
                  ele.style.opacity = 0;
                });

                const et = document.querySelector("#boo");
        const ee = document.querySelector("#doll")
                et.addEventListener("mouseover", function() {
                  ee.style.opacity = 1;
            
                });
                
                et.addEventListener("mouseout", function() {
                  ee.style.opacity = 0;
                });
             

           
