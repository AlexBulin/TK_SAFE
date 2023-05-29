(function ($) {
"use strict";


$(document).ready(function(){

// Мобильное меню
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};

$('.textmonial_active').owlCarousel({
  loop:true,
  margin:100,
  items:1,
  autoplay:true,
  navText:['<i class="Flaticon flaticon-left"></i>','<i class="Flaticon flaticon-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:true,
      },
      992:{
          items:1
      }
  }
});

});

})(jQuery);	