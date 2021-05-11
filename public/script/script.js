console.log('LOADED')

/* init */
document.getElementById("burgerClose").style.display = 'none';
document.getElementById("menunav").style.display = 'none';
const pageContent = document.getElementById("page").innerHTML;

/* menunav */
document.getElementById("burgerOpen").addEventListener("click", open);
document.getElementById("burgerClose").addEventListener("click", close);

function open() {
    document.getElementById("burgerOpen").style.display = 'none';
    document.getElementById("burgerClose").style.display = 'block';
    document.getElementById("menunav").style.display = 'flex';
    // document.getElementById("menunav").classList.add("visible");
    document.getElementById("menunav").style.left = "0";
    document.getElementById("page").innerHTML = 'Menu';
}

function close() {
    document.getElementById("burgerClose").style.display = 'none';
    document.getElementById("burgerOpen").style.display = 'block';
    document.getElementById("menunav").style.display = 'none';
    // document.getElementById("menunav").classList.remove("visible");
    document.getElementById("page").innerHTML = pageContent;
}

/* menu item */
const navHome = document.getElementById('navHome')
const navCV = document.getElementById('navCV')
const navProjets = document.getElementById('navProjets')
const navPortfolio = document.getElementById('navPortfolio')
const navContact = document.getElementById('navContact')

/* scroll SVG */

// if(page) {
//     window.onscroll = function (e) {  
//         console.log('SCRLL')
//         // console.log(window.pageYOffset)
//         // console.log(window.innerHeight)
//         if (window.pageYOffset >= window.innerHeight) {
//             if(document.getElementById('svgCircle').classList.contains('imgScaled')) {
//             }else {
//                 document.getElementById('svgCircle').classList.add('imgScaled')
//             }
//         } else {
//             if(document.getElementById('svgCircle').classList.contains('imgScaled')) {
//                 document.getElementById('svgCircle').classList.remove('imgScaled')
//             }
//         }
//     } 
// }


/* Anim */
var textWrapper = document.querySelector('.title-h1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.title-h1 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
//   .add({
//     targets: '.title-h1',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });