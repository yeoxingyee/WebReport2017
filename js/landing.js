var windowHeight;
var windowWidth;
var currentSite;
(function(){
  console.log(window.innerHeight);
  windowHeight = window.innerHeight;
  var currentSite = document.location.href.match(/[^\/]+$/)[0];
  if(document.location.href.match(/[^\/]+$/)[0].indexOf("index") !="-1"){
      $("#landing").css({'height': windowHeight + "px"});
  }
  else{
    $("#landing").css({'height': windowHeight/3 + "px", 'padding-top' : '5%', 'padding-bottom' : '5%'});
  }
}
)();

$('nav li a, #landing a, #project-nav ol li a').click(function(){
    var top = $('body').find($(this).attr('href')).offset().top;
    $('html, body').animate({
        scrollTop: top - windowHeight/4
    },1500, 'easeInOutExpo');

    return false;
});

$(document).scroll(function() {
   if($(window).scrollTop() === 0) {
     $("nav").addClass("navtop");
   }
   else if ($(window).scrollTop() >= 100){
     $("nav").removeClass("navtop");
   }
});

$(document).scroll(function() {
   if($(window).scrollTop() <=100) {
     $("#project-nav").removeClass("magic-fixed");
     $("#project-nav").addClass("magic-orig");
     console.log('<=100');
   }
   else if ($(window).scrollTop() >= 100){
     $("#project-nav").removeClass("magic-orig");
     $("#project-nav").addClass("magic-fixed");
     console.log('>=100');
   }
});
