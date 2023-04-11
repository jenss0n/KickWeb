const animEls = document.querySelectorAll('.anim-in');

animEls.forEach(el => {
  var splitEl = new SplitText(el, {type:"lines, words", linesClass:"line"});
  var splitTl = gsap.timeline({duration: .35, ease: 'power4', scrollTrigger: {trigger: el, start:'top 90%'}});
  
  splitTl.from(splitEl.words, {yPercent:"100", stagger: 0.025,});
  
});