(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict



function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item') === true) {
            $('.scale-in-center').addClass('in-view')
        }

    });

     $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item1') === true) {
            $('.scale-in-center1').addClass('in-view2')
        }

    });

      $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item2') === true) {
            $('.scale-in-center2').addClass('in-view3')
        }

    });

       $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item3') === true) {
            $('.scale-in-center3').addClass('in-view4')
        }

    });

//for arrows in second section
 $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item1') === true) {
            $('.arrow').addClass('in-view2')
        }

    });

      $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item2') === true) {
            $('.arrow2').addClass('in-view3')
        }

    });

       $(window).scroll(function(){

        if (isScrolledIntoView('.gallery-item3') === true) {
            $('.arrow3').addClass('in-view4')
        }

    });


//for text in about

 $(window).scroll(function(){

        if (isScrolledIntoView('.bounce-in-top') === true) {
            $('.aboutext').addClass('ainview')
        }

    });

     $(window).scroll(function(){

        if (isScrolledIntoView('.bounce-in-top') === true) {
            $('.abouttext2').addClass('ainview2')
        }

    });

      $(window).scroll(function(){

        if (isScrolledIntoView('.bounce-in-top') === true) {
            $('.abouttext3').addClass('ainview3')
        }

    });

       $(window).scroll(function(){

        if (isScrolledIntoView('.bounce-in-top') === true) {
            $('.abouttext4').addClass('ainview4')
        }

    });


        $(window).scroll(function(){

        if (isScrolledIntoView('.bounce-in-top') === true) {
            $('.ok').addClass('slide-in-blurred-top')
        }

    });

//email form


$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

  $('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      }); 
});
