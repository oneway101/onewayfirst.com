$(window).scroll(function(){
  /*change text color on scroll*/
/*  $('.grid-item').css('color','#FE1F6D');
   clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.grid-item').css('color','#fff');
        //console.log("Haven't scrolled in 1000ms!");
    }, 1000));*/

  var wScroll = $(this).scrollTop();
  var winHeight = $(window).height();
  var skillsOffset = $('#skills').offset().top -(winHeight/2);
  var portfolioOffset = $('#masonary').offset().top;
  var skillBars = [90,80,70,60,75,90,80,70,75,78];
  //console.log('wScroll: '+ wScroll + ', windowHeight: '+ winHeight);
  //console.log('portfolioOffset: ' + portfolioOffset);
  if(wScroll >= skillsOffset && wScroll < portfolioOffset){
      $('.skills-wrapper .bar').each(function(i){
        var barWidth = skillBars[i] + '%';
        var bar = $(this);
        bar.css({'width':barWidth,'opacity':1});
      });
  }
  else{
    $('.bar').css({'width':'10px','opacity':0});
  }
});

/* navigation scroll effects and offsets*/
$("a[href='#bio']").click(function() {
  $('html, body').animate({scrollTop: $('#bio').offset().top}, 'slow');
  return false;
});
$("a[href='#skills']").click(function() {
  $('html, body').animate({scrollTop: $('#skills').offset().top}, 'slow');
  return false;
});
$("a[href='#portfolio']").click(function() {
  $('html, body').animate({scrollTop: $('#portfolio').offset().top - 50}, 'slow');
  return false;
});
$("a[href='#resume']").click(function() {
  $('html, body').animate({scrollTop: $('#resume').offset().top - 200}, 'slow');
  return false;
});
$("a[href='#contact']").click(function() {
  $('html, body').animate({scrollTop: $('#contact').offset().top}, 'slow');
  return false;
});

/*masonary*/
$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
})


/*portfolio*/
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

$('#resume-button').click(function(){
  
  $('.design-resume').toggle();
    $(this).text(function(i,text){
      if(text==='VIEW RESUME'){
        $('html, body').animate({
        scrollTop: $("#resume-button").offset().top}, 500);
        return text = 'HIDE RESUME';
      }
      else{
        /*$('html, body').animate({
        scrollTop: $("#resume").offset().top
        }, 500);*/
        return text = 'VIEW RESUME';
      }
    });
});