$('#webdev-tab').click(function(){
	$('.web-projects-wrapper').show();
	$('.design-projects-wrapper').hide();
});

$('#design-tab').click(function(){
	$('.web-projects-wrapper').hide();
	$('.design-projects-wrapper').show();
});

$('#internships').click(function () {
  $('.intern-lists').toggle();
});

$('.resume-wrapper>button').click(function(){
  $('.design-resume').show();
});

/*// Add smooth scrolling to all links
$("#resume").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){
 
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});*/
