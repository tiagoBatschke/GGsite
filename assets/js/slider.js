/*=============== Slick===============*/

$(document).ready(function() {


    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendArrows: $(".custom-arrows"),
      prevArrow: '<div class="container_prev"><button class="slick-prev">‹</button></div>',
      nextArrow: '<div class="container_next"><button class="slick-next">›</button></div>',
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 3.2,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 3.2,
            infinite: false,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 2.2,
            infinite: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 2.2,
            infinite: false,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1.2,
            infinite: true,
          }
        },
      ]
    });
    $(".carrousel").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendArrows: $(".custom-arrows"),
      prevArrow:false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
    });
  });