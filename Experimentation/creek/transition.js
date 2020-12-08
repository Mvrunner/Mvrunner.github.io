window.onload = () =>{
    setTimeout(() => {
        const tl2 = new TimelineLite({paused : false});

        document.getElementById("transition").style.zIndex = 100;
    
        tl2.fromTo(".transition", 1, {
            x: 0,
            width: "100%"
        }, {
            width: "0%"
        })
    }, 500);
}