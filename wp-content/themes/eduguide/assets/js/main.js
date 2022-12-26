/*
Theme Name: eduguide
Description: Education Premium Responsive Wordpress Theme
Author: Md Rafiquzzaman Bhuiyan
Version: 1.0.0
Design and Developed by: Md Rafiquzzaman Bhuiyan
*/

/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu
	02. wow js active
	03. slick slider
	04. chosen 
  05. countdown
  06. counter js active
  07. slick slider2
  08. slick slider3
  09. scrollUp  
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";

    /*---------------------
     01. jQuery MeanMenu
    --------------------- */
	jQuery('nav#dropdown').meanmenu();

    /*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
    new WOW().init();

    /*---------------------
     03. slick slider
    --------------------- */
   
    jQuery('.slider-active').slick({
      centerMode: true,
      dots: true,
      fade: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });     
    
    /*---------------------
     04. chosen
    --------------------- */   
    jQuery('.orderby').chosen({disable_search: true, width: "auto"});
    
   /*---------------------
     05. countdown
    --------------------- */  

    jQuery('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
		});
    });
    
    /*---------------------
     06. counter js active
    --------------------- */ 
    
    jQuery('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    /*---------------------
     07. slick slider2
    --------------------- */

    jQuery('.slider-active2').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      infinite: true,
     
    }); 
    
     /*---------------------
     08. slick slider3
    --------------------- */

    jQuery('.slider-active3').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    /*--------------------------
    09. scrollUp
    ---------------------------- */ 
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    }); 




  })(jQuery);   
  