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
console.log('color');
$('.test').mouseenter(
  function () {
  	console.log("enter");
	$(this).animate({
		backgroundColor:"#03C",
    }, 500 );
});

$('.test').mouseleave(
  function () {
  	console.log("leave");
	$(this).animate({
		backgroundColor:"#0CF",
    }, 500 );
});

});

