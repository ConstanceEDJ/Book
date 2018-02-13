$(document).ready(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo('section#page2', 1, { y: '100%' }, { y: '0%', ease: Linear.easeNone }) // From botton
    .fromTo('section#page3', 1, { x: '100%' }, { x: '0%', ease: Linear.easeNone }) // From right
    })


  // create a scene
  new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 'onLeave',
      duration: '200%' // = nombre de slides * 100 (pour un scroll naturel)
    })
    .setPin('#intro')
    .setTween(wipeAnimation)
    
    .addIndicators()
    .addTo(controller);
});