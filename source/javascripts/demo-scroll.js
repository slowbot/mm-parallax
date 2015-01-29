$(document).ready(function($) {
  // make a variable to store the window height.
  var windowHeight = $(window).innerHeight();
  
  // function to be used to retrieve variable
  function getWindowHeight() {
    return windowHeight;
  }
  
  // update window height on resize
  $(window).on("resize", function () {
    windowHeight = $(window).innerHeight();
  });   

  var controller;
  controller = new ScrollMagic();

    //var scene = new ScrollScene({triggerElement: "#trigger1", duration: getWindowHeight})

  // build scene
    var scene = new ScrollScene({
        triggerElement: "#pin2", 
        offset: 300,
        duration: 6000
    })

    .setPin("#pin2")
    .addTo(controller);

    // build scene
    var scene = new ScrollScene({
        triggerElement: "#pin2", 
        offset: 500,
        duration: 300
    })

    .setTween(TweenMax.fromTo("#ha_data_access", 0.5, 
      {"top": "-250px"},
      {"top": "0",
      ease: Linear.easeNone}
    ))

    .addTo(controller);

    // build scene
    var scene = new ScrollScene({
        triggerElement: "#pin2", 
        offset: 900,
        duration: 300
    })

    .setTween(TweenMax.fromTo("#ha_governance", 0.5, 
      {"left": "-200px"},
      {"left": "0",
      ease: Linear.easeNone}
    ))

    .addTo(controller);

    // build scene
    var scene = new ScrollScene({
        triggerElement: "#pin2", 
        offset: 900,
        duration: 300
    })

    .setTween(TweenMax.fromTo("#ha_security", 0.5, 
      {"right": "-400px"},
      {"right": "0",
      ease: Linear.easeNone}
    ))

    .addTo(controller);

     // build scene
    var scene = new ScrollScene({
        triggerElement: "#pin2", 
        offset: 1200,
        duration: 300
    })

    .setTween(TweenMax.fromTo("#ha_ops", 0.5, 
      {"right": "-200px"},
      {"right": "0",
      ease: Linear.easeNone}
    ))

    .addTo(controller);


});