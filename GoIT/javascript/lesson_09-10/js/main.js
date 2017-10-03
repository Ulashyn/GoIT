// jCarousel
$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});

// jQuerySelectBox
$('select').selectbox();

// Slide down menu
$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});

// jQueryColor
$(document).ready(function(){
$('.sub-menu').mouseenter(
  function () {
	$(this).animate({
		backgroundColor:"#FF6464",
    }, 500 );
});

$('.sub-menu').mouseleave(
  function () {
	$(this).animate({
		backgroundColor:"#E14B4B",
    }, 500 );
});

});

