/*********** Products slider ***********/
(function() {
 
    // store the slider in a local variable
    var $window = $(window),
        flexslider = { vars:{} };
   
    // tiny helper function to add breakpoints
    function getGridSize() {
      return (window.innerWidth < 500) ? 1 :
             (window.innerWidth < 600) ? 2 :
             (window.innerWidth < 900) ? 3 : 4;

    }
   
    $window.on("load", function() {
      $('.products .flexslider').flexslider({
        animation: "slide",
        prevText: "",
	      nextText: "",
        animationLoop: false,
        itemWidth: 230,
        itemMargin: 30,
        minItems: getGridSize(), // use function to pull in initial value
        maxItems: getGridSize() // use function to pull in initial value
      });
    });
   
    // check grid size on resize event
    $window.on("resize",function() {
      var gridSize = getGridSize();
   
      flexslider.vars.minItems = gridSize;
      flexslider.vars.maxItems = gridSize;
    });
  }());
  /*********** Products slider ***********/

  $(window).on('resize',function() {
    var width = $( window ).width();
    console.log(width);
    if(width < 768) {
      $('.gallery .container > div').addClass('flexslider');
      $('.gallery .flexslider').flexslider({
        animation: "slide"
      });
  }else if(width >= 768){
    $('.gallery .container > div').removeClass('flexslider');
  }
  });

  $(window).on('load',function() {
    var width = $( window ).width();
    console.log(width);
    if(width < 768) {
      $('.gallery .container > div').addClass('flexslider');
      $('.gallery .flexslider').flexslider({
        animation: "slide",
        prevText: "",
	      nextText: ""
      });
  }else if(width >= 768){
    $('.gallery .container > div').removeClass('flexslider');
  }
  });
 /*********** Navigation ***********/
	$('.burger, nav a').on('click', function(){
    $('.nav').slideToggle(500);
   });
/*********** Navigation ***********/

/*********** Scroll ***********/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/*********** Scroll ***********/

/*********** Modal ***********/
$('.order').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal').addClass('open');
});
$('.modal .close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal').removeClass('open');
});
/*********** Modal ***********/

/*********** Map ***********/
function mapsSelector() {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPod") != -1) || 
     (navigator.platform.indexOf("iPad") != -1))
    window.open("maps://maps.google.com/maps/dir//Doe+Meadow+Dr,+Reisterstown,+MD+21117,+Сједињене+Државе/@39.4503472,-76.7999767,15z/data=");

  else /* else use Google */
    window.open("https://maps.google.com/maps/dir//Doe+Meadow+Dr,+Reisterstown,+MD+21117,+Сједињене+Државе/@39.4503472,-76.7999767,15z/data=");
}
/*********** Map ***********/