/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// VK comments
VK.Widgets.Comments("vk_comments", {limit: 15, width: "665", attach: "false"});


// MaskedInput
jQuery(function($){
			$(".mphone").mask("(999) 999-9999");
			$(".mphone2").mask("(999) 999-9999");
			$(".mphone3").mask("(999) 999-9999");
			$(".mphone4").mask("(999) 999-9999");
			$(".mphone5").mask("(999) 999-9999");
			$(".mphone6").mask("(999) 999-9999");
			$(".mphone7").mask("(999) 999-9999");
			$(".mphone8").mask("(999) 999-9999");
			$(".mphone9").mask("(999) 999-9999");
		});

// Time
var clock;
		
		$(document).ready(function() {
			var clock;

			clock = $('.your-clock').FlipClock({
		        clockFace: 'DailyCounter',
                language: 'ru',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	}
		        }
		    });
				    
		    clock.setTime(220880);
		    clock.setCountdown(true);
		    clock.start();

		});