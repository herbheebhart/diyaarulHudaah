// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel(); 

// })
$(".img_slider1 ").owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    items:4,
    nav:false,
    loop:true,
    responsive:{
        0:{
            items:0,
            dots:false
        },
        200:{
            items:1,
            dots:0
        },
      485:{
          items:1,
          dots:false
      },
      728:{
          items:1,
          dots:false
      },
      1000:{
          items:2,
          dots:false
      },
      1240:{
          items:4,
          dots:true
      }
    }
});

$(".img_slider2 ").owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    autoplaytimeout:2000,
    margin:10,
    items:3,
    nav:false,
    loop:true,
    responsive:{
        0:{
            items:0,
            dots:false
        },
        200:{
            items:1,
            dots:false
        },
      500:{
          items:1,
          dots:false
      },
      728:{
          items:1,
          dots:false
      },

      900:{
          items:1,
          dots:false
      },
      1000:{
          items:1,
        dots:true
      },
      1240:{
          items:1,
          dots:true
      }
    }
});