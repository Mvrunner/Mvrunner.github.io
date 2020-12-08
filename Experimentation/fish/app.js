window.onload = () =>{

    /*
    const tl2 = new TimelineLite({paused : false});

        document.getElementById("transition").style.zIndex = 100;
    
        tl2.fromTo(".transition", 1, {
            x: 0,
            width: "100%"
        }, {
            width: "0%"
        })
    */

    //document.getElementById("backbutt")


    //window.onload = () =>{

        /*const tl2 = new TimelineLite({paused : true});

        document.getElementById("transition").style.zIndex = 100;
     
        tl2.fromTo(".transition", 0.5, {
            x: 0,
            width: "0%"
        }, {
            width: "100%"
        })*/

        //const tl2 = new TimelineLite({paused : true});

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

        /*const tl2 = new TimelineLite({paused : false});

        document.getElementById("transition").style.zIndex = 100;
     
        tl2.fromTo(".transition", 0.5, {
            x: 0,
            width: "100%"
        }, {
            width: "0%"
        })*/

    setTimeout(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

        /*const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");*/


        const moonPath = "M20.5 41.305C20.5 63.6725 40.5 81.805 40.5 81.805C18.1325 81.805 0 63.6725 0 41.305C0 18.9374 18.1325 0.804962 40.5 0.804962C40.5 0.804962 20.5 18.9374 20.5 41.305Z";
        const sunPath = "M81 40.5C81 62.8675 62.8675 81 40.5 81C18.1325 81 0 62.8675 0 40.5C0 18.1325 18.1325 0 40.5 0C62.8675 0 81 18.1325 81 40.5Z";
        const darkMode = document.querySelector('#darkMode');
        let toggle = false;


        //Click on un sun*

        let lightordark = document.getElementById("h1").innerHTML;

        darkMode.addEventListener('click', () => {
            //use Anime.js

            document.getElementById("because").style.visibility = "visible";
            if(!toggle){/*}*/
                document.getElementById("h1").innerHTML = "Dark Mode?!"//1 1"
            } else{
                document.getElementById("h1").innerHTML = "Light Mode?"
            }


            const timeline = anime.timeline({
                duration : 750,
                easing : "easeOutExpo"
            });
            //setup timeline ^

            //Add  animations to ltimeline timeline*

            timeline.add({
                targets: ".sun",
                d: [
                    {
                        value: toggle ? sunPath : moonPath
                    }
                ]
            })
            .add({
                targets: "#darkMode",
                rotate: toggle? 0 : 320
            }, '-= 350')
            .add({
                targets: "section",
                backgroundColor: toggle ? 'rgb(199, 199, 199)' : 'rgb(22,22,22)',
                color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
            }, toggle ? '-=1100' : '-=750'); //'-= 1180'); //'-= 750');

            if(!toggle){
                toggle = true;
            } else{
                toggle = false;
            }

        })
            }, 1500);
}

/*const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

/*const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");*/
/*

const moonPath = "M20.5 41.305C20.5 63.6725 40.5 81.805 40.5 81.805C18.1325 81.805 0 63.6725 0 41.305C0 18.9374 18.1325 0.804962 40.5 0.804962C40.5 0.804962 20.5 18.9374 20.5 41.305Z";
const sunPath = "M81 40.5C81 62.8675 62.8675 81 40.5 81C18.1325 81 0 62.8675 0 40.5C0 18.1325 18.1325 0 40.5 0C62.8675 0 81 18.1325 81 40.5Z";
const darkMode = document.querySelector('#darkMode');
let toggle = false;


//Click on un sun*

let lightordark = document.getElementById("h1").innerHTML;

darkMode.addEventListener('click', () => {
    //use Anime.js

    document.getElementById("because").style.visibility = "visible";
    if(!toggle){/*}*/
  /*      document.getElementById("h1").innerHTML = "Dark Mode?!"//1 1"
    } else{
        document.getElementById("h1").innerHTML = "Light Mode?"
    }


    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    //setup timeline ^

    //Add  animations to ltimeline timeline*

    timeline.add({
        targets: ".sun",
        d: [
            {
                value: toggle ? sunPath : moonPath
            }
        ]
    })
    .add({
        targets: "#darkMode",
        rotate: toggle? 0 : 320
    }, '-= 350')
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(199, 199, 199)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
    }, toggle ? '-=1100' : '-=750'); //'-= 1180'); //'-= 750');

    if(!toggle){
        toggle = true;
    } else{
        toggle = false;
    }

})
*/