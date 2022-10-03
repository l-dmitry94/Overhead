$(".banner, .photo").slick({
	fade: true,
	arrows: false,
	pauseOnHover: false,
	autoplay: true,
	autoplaySpeed: 5000
});

$(".js-mb").on("click", function(){
	$(".header__opened").slideToggle()
});

$( window ).resize(function() {
  if ($(window).width() > 768){
  	$(".header__opened").hide();
  }
});

$(".categories").slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: true,
	prevArrow: '<button type="button"><img src="img/index/prev-arrow.png"></button>',
	nextArrow: '<button type="button"><img src="img/index/next-arrow.png"></button>',
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// $(".header__menu").find("li.selected").click(function(){
//   window.location.href = "products.html";
// })
// $(".header__menu__opened").find("li.selected").click(function(){
//   window.location.href = "products.html";
// })
$("#sectional").click(function(){
  window.location.href = "products-sectional.html";
})


$(".tabs").find("li").click(function(){
  $(".tabs").find("li").removeClass("active");
  $(this).addClass("active");
  if($(".tabs").find("li#features").hasClass("active")){
    $(".tabs__content").find("#content-1").show();
    $(".tabs__content").find("#content-2, #content-3, #content-4").hide();
  };
   if($(".tabs").find("li#colours").hasClass("active")){
    $(".tabs__content").find("#content-2").show();
    $(".tabs__content").find("#content-1, #content-3, #content-4").hide();
  };
   if($(".tabs").find("li#options").hasClass("active")){
    $(".tabs__content").find("#content-3").show();
    $(".tabs__content").find("#content-1, #content-2, #content-4").hide();
  };
   if($(".tabs").find("li#documents").hasClass("active")){
    $(".tabs__content").find("#content-4").show();
    $(".tabs__content").find("#content-1, #content-2, #content-3").hide();
  };
})


$(".photo__finder__internal").slick({
  arrows: false,
  dots: true,
  fade: true,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000
});

$(".finder__card").click(function(){
  window.location.href = "finder-internal.html";
})
$(".card__linear").click(function(){
  window.location.href = "finder.html";
})
