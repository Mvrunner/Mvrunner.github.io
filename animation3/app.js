const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

/*const tween = TweenLite.to(".cover", 1, {
    width: "40%"
});*/

const tl = new TimelineLite({paused : true, reversed: true});

tl.to(".cover", 1, {
    width: "50%",
    ease: Power2.easeOut
})
.to("nav", 1, {
    height: "100%",
    width: "50%",
    ease: Power2.easeOut
}, "-= 0.5")
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 100,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 50,
    onComplete : function(){
    /*    ;/navOpen.getElementsByClassName.pointerEvents = 'auto';*/
        navOpen.style.pointerEvents = "auto";
        console.log("done");
    }
})

const tl2 = new TimelineLite({paused : true});

const video1 = document.getElementById("video1");

/*tl.to()*/

/*tl.to("#video1", 1, {
   /*x: 0,
   width: "100%",
   height: "100%"*/
  /*.*  position: "fixed",
    right: 0,
    bottom: 0,
    minwidth: "100%",
    minheight: "100%"
});

document.getElementById("video1").addEventListener('click', () =>/*)*//*{
 /*   tl2.play()
});/*()*/  /**/

navButton.addEventListener('click', (e) => {
    /*tl.play()*/
    /*tl.reverse()?!!!*/

    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }

    toggleTween(tl);
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}

document.getElementById("fishhtml").addEventListener('click', (e) => {
   // --document.getElementById("transition").style.zIndex = 10;

   e.preventDefault();
   let target = e.target;
   slide(target);

   /*
   e.preventDefault();
   let target = e.target.href;

   const tl2 = new TimelineLite({paused : true});

   document.getElementById("transition").style.zIndex = 10;

   tl.fromTo(".transition", 0.5, {
       x: 0,
       width: "0%"
   }, {
       width: "100%"
   })

    setTimeout(() => {

        window.location.href = target;
    }, 1500);*/
})

document.getElementById("creekhtml").addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    slide(target);
})

function slide(target){
    const tl2 = new TimelineLite({paused : true});

    document.getElementById("transition").style.zIndex = 10;

    tl.fromTo(".transition", 0.5, {
        x: 0,
        width: "0%"
    }, {
        width: "100%"
    })

    setTimeout(() => {

        // window.location.href = target;
    window.location.href = target.href;
    }, 1500);
}