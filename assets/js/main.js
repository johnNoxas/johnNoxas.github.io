
    $('#single-testimonial-item').owlCarousel({
        items : 1,
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });  

    $('#single-testimonial-item').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
    $('#single-testimonial-item').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

      $('#image-carousel').owlCarousel({
        navigation : false,
        pagination: true,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });           

      $('#posts-carousel').owlCarousel({
        navigation : true,
        pagination: true,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });   

      $('#posts-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#posts-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>'); 
     

      $('#posts-carousel-3col').owlCarousel({
        stagePadding: 200,
        nav : true,
        navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-caret-left'></i></div>", 
        "<div class='nav-btn next-slide'><i class='fa-solid fa-caret-right'></i></div>"],
        loop: true,
        center: true,
        items : 1,
        responsive:{
          0:{
              items: 1,
              stagePadding: 50
          },
          576:{
              items: 1,
              stagePadding: ($(window).width() - 576)/2
          },
          768:{
              items: 2,
              stagePadding: ($(window).width() - 768)/2
          },
          992:{
              items: 3,
              stagePadding: ($(window).width() - 992)/2
          },
          1200:{
              items: 3,
              stagePadding: ($(window).width() - 1200)/2
          }
      }
      });

      $( window ).resize(function() {
        $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
      });
  
      $('#image-slider').owlCarousel({     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem: true     
      });   
      $('#image-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#image-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

      // Waypoint related things
    
    // Make counters restart on slide
    $( document ).ready(function() {
        $('.timer').waypoint({
            handler: function() {
                $(this.element).countTo('restart');
            },
            offset: '100%',

        });
        $('.animated').css('opacity', 0);
        $('.animated').waypoint({
          handler: function() {
              $(this.element).addClass(this.element.dataset.animation);
          },
          offset: '50%',

      });
    });

    $('body').on('scroll', function(){Waypoint.refreshAll();});


    
