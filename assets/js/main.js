
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
        navigation : true,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        afterAction: function(el){
          //remove class active
          this
          .$owlItems
          .removeClass('owl-active')
       
          //add class active
          this
          .$owlItems //owl internal $ object containing items
          .eq(this.currentItem + 1)
          .addClass('owl-active')    
           } 
      });

      $('#posts-carousel-3col').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#posts-carousel-3col').find('.owl-next').html('<i class="fa fa-angle-right"></i>'); 
  
      $('#image-slider').owlCarousel({     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true     
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


    
