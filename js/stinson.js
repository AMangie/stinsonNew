$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -50 
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 60
})
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// GALERIA
$(document).ready(function() {
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");
      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: true,
        pagination:false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });
      sync2.owlCarousel({
        items : 15,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });
      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }
      }
      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });
      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }
        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
      }
     
    });

// FORMULARIO
    $(".numBoletos").on("change", function() {
          $(".valueBoletos").text($(this).find("option:selected").attr("value"));
      });
      $('.modal').on('hidden.bs.modal', function () {
        $(".valueBoletos").text("0");
        $(this).find('form').trigger('reset');
      });

// CLICK OUTSIDE

     $(document).click(function (event) {
      var clickover = $(event.target);
      var $navbar = $(".navbar-collapse");               
      var _opened = $navbar.hasClass("in");
      if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
          $navbar.collapse('hide');
      }
  });

// FADE OUT
$(window).on("scroll", function() {
     if ($(this).scrollTop() > 300) {
       $(".headerHistoria").addClass("headerFadeOut");
       $(".contentHistoria").addClass("contentFadeOut");
     } else {
       $(".headerHistoria").removeClass("headerFadeOut");
       $(".contentHistoria").removeClass("contentFadeOut");
     }
});
// ANIMATE

new WOW().init();
     