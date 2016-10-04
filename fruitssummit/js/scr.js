  $(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                keyboardControl: true,
                mousewheelControl: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                direction: 'vertical',
                speed: 2000,
                hashnav:true,
                loop: true,
                autoplay: 3500,
    });
   $('.slide-to-link').on('click', function (e){
      e.preventDefault();
      swiper.slideTo($(this).attr('data-slide'));
   });
      $('#shake').hover(
       function(){ $(this).addClass('uk-animation-scale') },
       function(){ $(this).removeClass('uk-animation-scale') }
)
});