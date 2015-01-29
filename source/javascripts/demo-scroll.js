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

  var scene = new ScrollScene({triggerElement: "#trigger1", duration: getWindowHeight})
    .setPin("#pin1")
    .addTo(controller);

  // show indicators (requires debug extension)
  scene.addIndicators();
});