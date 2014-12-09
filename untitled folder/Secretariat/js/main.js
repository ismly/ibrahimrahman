/*

	SIXWATS TEMPLATE  V1.0 BY SUPVIEW.BE
	
	
	01. Sticky Header Text
	02. Parallax Settings
	03. Sticky Nav Bar + Selected Effect
	04. Members Hover Effect
	05. Portfolio / Works Section
	06. Fade In / Fade Out Elements
	07. Form Sender
	08. Smooth Scrolling
	09. MediaCheck
	10. Initialise Instagram
	11. Videobackground ready

*/

var ajax_form = true;

$(document).ready(function () { // Document ready


    $('.trigger').click(function () {
        if ($('#showhide').css('left') == '-200px') {
            $("#showhide").css("left", "0");

        } else {
            $("#showhide").css("left", "-200px");
        }

        return false;
    });


    mediaCheck({
        media: '(max-width: 1024px)',  /* If the page is max-width:1024px do the entry */
        entry: function () {
		

        },
        exit: function () { /* If not do the exit function */

/*-----------------------------------------------------------------------------------*/
/*	01. STICKY HEADER TEXT
/*-----------------------------------------------------------------------------------*/
	        

			YUI().use('node', function (Y) {
			  Y.on('domready', function () {
			    
			    var scrolling = false,
			        lastScroll,
			        i = 0;
			    
			    Y.on('scroll', function () {
			      if (scrolling === false) {
			        fade();
			      }
			      scrolling = true;
			      setTimeout(function () {
			        scrolling = false;
			        fade();
			      }, 0);
			    });
			    
			    function fade() {
			      
			      lastScroll = window.scrollY;
			      
			      Y.one('.huge-title').setStyles({
			        'transform' : 'translate3d(0,' + Math.round(lastScroll/2) + 'px,0)',
			        'opacity' : (100 - lastScroll/4)/100
			      });
			      
			      if (scrolling === true) {
			        window.requestAnimationFrame(fade);
			      }
			    }
			    
			  });
			});


/*-----------------------------------------------------------------------------------*/
/*	02. PARALLAX SETTINGS
/*-----------------------------------------------------------------------------------*/
	

			//.parallax(xPosition, speedFactor, outerHeight) options:
			//xPosition - Horizontal position of the element
			//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
			//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
			$('#header').parallax("1%", -0.4);	
   
        }
    }); /* END OF THE MEDIACHECK */



/*-----------------------------------------------------------------------------------*/
    /*	03. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/

    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 500;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();



	var sections = $("section");
	var navigation_links = $("nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '0'
	});



/*-----------------------------------------------------------------------------------*/
/*	04. MEMBERS HOVER EFFECT
/*-----------------------------------------------------------------------------------*/
	
	mediaCheck({
	    media: '(max-width: 1024px)', /* If the page is max-width:1024px do the entry */
	    entry: function () { 
		
	
	    },
	    exit: function () {  /* If not do the exit function */
			
			$(".member").hover(
			    function(e){ 
				 $(this).children(".image").css("opacity", "0.1");   
				 $(this).children(".text").css("opacity", "1");   
				    
			    }, // over
			    function(e){
			     $(this).children(".text").css("opacity", "0");
				 $(this).children(".image").css("opacity", "1");   
			     }  // out
			);
			
		}});



/*-----------------------------------------------------------------------------------*/
/*	05. PORTFOLIO / WORKS SECTION
/*-----------------------------------------------------------------------------------*/


/* Open Action don't remove */

function openAction() {

	$('body').css("overflow","hidden");
	
	var $shadow;
	
	$shadow = $('.shadow:visible');
	for ( var i = 0; i < $shadow.length; i++ ) {
		el = $shadow.eq(i);
		el.children('.content-left').delay(800).addClass('show');
		el.children('.content-right').delay(800).addClass('show');
	}
}

/* Close Action don't remove */


function closeAction() {

	$('body').css("overflow","auto");

	var $list;
	
	$list = $('.content-left:visible, .content-right:visible');
	for ( var i = 0; i < $list.length; i++ ) {
		el = $list.eq(i);
		el.removeClass('show');
	}

	$list = $('.shadow');
	for ( var i = 0; i < $list.length; i++ ) {
		$list.eq(i).delay(800).fadeOut("slow");
	}
			
}

/* Close Action don't remove */


$('.closex').on('click', function() {	
	closeAction();
});


/* Close Action when Escape is pressed */


$(window).keyup(function(e) {

	switch( e.keyCode ) {
		
		case 27:			
			closeAction();
	}});


/* WORK 1 */

$('.work1').on('click', function() {
    $('.work1-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 2 */

$('.work2').on('click', function() {
    $('.work2-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 3 */

$('.work3').on('click', function() {
    $('.work3-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 4 */

$('.work4').on('click', function() {
    $('.work4-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 5 */

$('.work5').on('click', function() {
    $('.work5-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 6 */

$('.work6').on('click', function() {
    $('.work6-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 7 */

$('.work7').on('click', function() {
    $('.work7-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 8 */

$('.work8').on('click', function() {
    $('.work8-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 9 */

$('.work9').on('click', function() {
    $('.work9-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/* WORK 10 */

$('.work10').on('click', function() {
    $('.work10-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});


/* WORK 11 */

$('.work11').on('click', function() {
    $('.work11-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 12 */

$('.work12').on('click', function() {
    $('.work12-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 13 */

$('.work13').on('click', function() {
    $('.work13-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 14 */

$('.work14').on('click', function() {
    $('.work14-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 15 */

$('.work15').on('click', function() {
    $('.work15-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 16 */

$('.work16').on('click', function() {
    $('.work16-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 17 */

$('.work17').on('click', function() {
    $('.work17-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 18 */

$('.work18').on('click', function() {
    $('.work18-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 19 */

$('.work19').on('click', function() {
    $('.work19-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});
/* WORK 20 */

$('.work20').on('click', function() {
    $('.work20-container').fadeIn( 800,  function() { 
    	openAction();     
    });
});

/*-----------------------------------------------------------------------------------*/
/*	06. Fade In / Fade Out Class Elements ( used in Portfolio )
/*-----------------------------------------------------------------------------------*/


	





/*-----------------------------------------------------------------------------------*/
/*	07. FORM SENDER
/*-----------------------------------------------------------------------------------*/




	/* Form Submission */
	$('form').submit(function() {
		
		var form_data = $(this).serialize();

		if (validateEmail($('input[name=email]').attr('value')))
		{
			
			if (typeof ajax_form !== "undefined" && ajax_form === true)
			{
				
				$.post($(this).attr('action'), form_data, function(data) {
					$('form').show('slow', function() { $(this).after('<div class="clear"></div> <p class="msg-ok">'+ data + '</p>'); });
	  				$('.spam').hide();
	  				$('.msg-ok').delay(300);
				});
				
				return false;
				
			}
			
		}

		else
		{
			$('p.spam').text('Please enter a valid e-mail').effect("pulsate", { times:3 }, 1000);
			return false;
		}
		
	});


/* Validate E-Mail */

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}





/*-----------------------------------------------------------------------------------*/
/*	08. SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
	



// SCROLL TO 
$('.goto').click( function() { // Au clic sur un élément
	var page = $(this).attr('href'); // Page cible
	var speed = 1200; // Durée de l'animation (en ms)
	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
	return false;
});



/*-----------------------------------------------------------------------------------*/
/*	09. MEDIACHECK
/*-----------------------------------------------------------------------------------*/


    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {



/*-----------------------------------------------------------------------------------*/
/*	10. INITIALISE INSTAGRAM
/*-----------------------------------------------------------------------------------*/

		/* SHOW ONLY 2 PICS ON MOBILE DEVICE */

	    $("#instagram").instagram({
	        clientId: '494a2117c72a4541a85ab40d77ff3fc7',
	        show: '1',
	        updateInterval: 960*60*2,
	        hash: 'rayban',
	        image_size: 'standard_resolution'
	    })
			
		

        },
        exit: function () {
        

	    $("#instagram").instagram({
	        clientId: '494a2117c72a4541a85ab40d77ff3fc7',
	        show: '12',
	        updateInterval: 960*60*2,
	        hash: 'rayban',
	        image_size: 'standard_resolution'
	    })
			
		

/*-----------------------------------------------------------------------------------*/
            /*	11. VIDEOBACKGROUND READY
/*-----------------------------------------------------------------------------------*/


            var videobackground = new $.backgroundVideo($('#header'), {
                "align": "centerXY",
                "width": 1280,
                "height": 720,
                "path": "http://www.baribal.be/6wats/video/", /* Folder wich contain the mp4, ogg and webm video */
                "filename": "cloud",
                "types": ["mp4", "ogg", "webm"]
            });
            
                $('video').css('display',"none");


        }


    }); /* END OF THE MEDIACHECK */


}); /* END OF Document Ready */

