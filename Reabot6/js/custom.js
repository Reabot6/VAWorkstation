AOS.init({
  offset: 120,       // Distance (in pixels) from the bottom of the page when animations start
  delay: 150,          // Delay before animation starts
  duration: 1500,     // Animation duration (in milliseconds)
  easing: 'ease-in-out',    // Easing function for the animation
  once: false,        // Whether animation should happen only once or every time the element comes into view
  mirror: true,     // Whether elements should animate out when scrolling past them
});
// scattering letters
const letters = document.querySelectorAll('#scattering-text span');

letters.forEach((letter) => {
  letter.addEventListener('mouseenter', () => {
    anime({
      targets: letter,
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      rotate: () => anime.random(-30, 30),
      duration: 500,
      easing: 'easeOutBack',
    });
  });

  letter.addEventListener('mouseleave', () => {
    anime({
      targets: letter,
      translateX: 0,
      translateY: 0,
      rotate: 0,
      duration: 500,
      easing: 'easeOutExpo',
    });
  });
});
anime.timeline({loop: false}) // Set loop to true if you want it to repeat
  .add({
    targets: '#wave-text span',
    translateY: [-10, 10],          // Vertical movement up and down
    opacity: [0, 1],                // Fade in each letter
    delay: anime.stagger(100, {     // Delay each letter by 100ms for wave effect
      start: 100,                   // Add a slight initial delay
      from: 'center',               // Start the wave from the center
      direction: 'alternate'        // Alternate direction for back-and-forth wave
    }),
    easing: 'easeInOutSine',        // Smooth wave easing
    duration: 500                   // Adjust duration for wave speed
  });


//  end

  (function ($) {
  
  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // PROJECTS IMAGE RESIZE
    function NewsImageResize(){      
      var LargeImage = $('.projects-thumb-small .projects-image').height();

      $('.projects-thumb-large').css('height', LargeImage + 'px');
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


