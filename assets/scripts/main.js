$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var winHeight = $(window).height();
  var skillBars = [90,80,70,60,75,90,80,70,75,78];

  if(wScroll > $('#skills').offset().top-winHeight){
    var skillsOffset = wScroll - Math.abs($('#skills').offset().top-winHeight);
    console.log('wScroll: '+ wScroll + ', skillsOffset: '+ skillsOffset, ', portfolioOffset:'+ $('#portfolio').offset().top);
    if(skillsOffset > 0 && wScroll < $('#portfolio').offset().top-winHeight){
      $('.skills-wrapper .bar').each(function(i){
        var barWidth = skillBars[i] + '%';
        var bar = $(this);
        bar.css({'width':barWidth,'opacity':1});
        console.log(i);
      });
    }
  }
});

$('#webdev-tab').click(function(){
	$('.web-projects-wrapper').show();
	$('.design-projects-wrapper').hide();
  $('#webdev-tab').addClass('active');
  $('#design-tab').removeClass('active');
});

$('#design-tab').click(function(){
	$('.web-projects-wrapper').hide();
	$('.design-projects-wrapper').show();
  $('#design-tab').addClass('active');
  $('#webdev-tab').removeClass('active');
});

$('#internships').click(function () {
  $('.intern-lists').toggle();
});

$('.resume-wrapper>button').click(function(){
  $('.design-resume').show();
});
