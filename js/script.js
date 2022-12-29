$(function($){

    //counter up js 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
     //sticky navbar
     var menuTop = $(".navSticky").offset().top;
     $(window).on("scroll", function () {
       var scrollToTop = $(window).scrollTop();
   
       //js
       if (scrollToTop > menuTop) {
         $(".navSticky").addClass("menuFix");
       } else {
         $(".navSticky").removeClass("menuFix");
       }
       // back top button js
       if (scrollToTop > 500) {
         $(".backtop").fadeIn(400);
       } else {
         $(".backtop").fadeOut(500);
       }
     });
      //backtop js
      $('.backtop ').on('click',function(){
       $('html,body').animate({
         scrollTop: 0
       },500);
     });
});