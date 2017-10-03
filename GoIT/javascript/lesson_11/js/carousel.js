
(function( $ ) {



    $.fn.myCaorusel = function(options) {
        
        var defaults = {
            leftUIEl : '.carousel-arrow-left-button',
            rightUIEl : '.carousel-arrow-right-button',
            pixelsOffset : '125',
            currentLeftValue : '0'
        }

        var settings = $.extend(defaults, options);

        var elementsList = this;
     
        
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * settings.pixelsOffset);
        var maximumOffset = 0;
     
        $(settings.leftUIEl).click(function() {
            if (settings.currentLeftValue != maximumOffset) {
                settings.currentLeftValue += 125;
                elementsList.animate({ left : settings.currentLeftValue + "px"}, 500);
            }
        });
     
        $(settings.rightUIEl).click(function() {
            if (settings.currentLeftValue != minimumOffset) {
                settings.currentLeftValue -= 125;
                elementsList.animate({ left : settings.currentLeftValue + "px"}, 500);
            }
        });

  };
})(jQuery);