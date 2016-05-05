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