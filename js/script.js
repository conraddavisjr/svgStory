var wLogo = document.querySelector('.w-outline');
var line = document.querySelectorAll('.ctrls-ol');
var globeContainer = document.querySelector('#globe-svg');

// console.log(line.getTotalLength());
tl = new TimelineMax();

tl.fromTo(globeContainer, 4, { scale: 4}, {ease: Power2.easeOut, scale: 1})
tl.fromTo(".logo-outline", 4, {drawSVG:"0%"}, {drawSVG:"100%"}, "-=2")
tl.staggerFromTo(".ctrls-ol", 1, {drawSVG:"0%", opacity:0}, {drawSVG:"100%", opacity:1}, 0.2, "-=4")
tl.to(globeContainer, 3, { scale: 6, top: -400, left: '-160%'}, "-=1"),
tl.to(wLogo, 1, { rotation: 50 }, "+=2");
