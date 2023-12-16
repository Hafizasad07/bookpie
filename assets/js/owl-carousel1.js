  
jQuery(".carousel1").owlCarousel({
    autoplay: true,
    rewind: true,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 10, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 8
      },
  
      1366: {
        items: 8
      },
  
      1900: {
        items: 10
      }
    }
  });
  $( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');
  