/*********** Products slider ***********/
(function() {
 
    // store the slider in a local variable
    var $window = $(window),
        flexslider = { vars:{} };
   
    // tiny helper function to add breakpoints
    function getGridSize() {
      return (window.innerWidth < 400) ? 1 :
             (window.innerWidth < 600) ? 2 :
             (window.innerWidth < 900) ? 3 : 4;

    }
   
    $(function() {
      SyntaxHighlighter.all();
    });
   
    $window.on("load", function() {
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
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

 /*********** Navigation ***********/
	$('.burger').on('click', function(){
    $('.nav').slideToggle(500);
   });
/*********** Navigation ***********/