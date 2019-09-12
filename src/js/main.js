
    $(document).ready(function($) {
        $('.header__link').click(function(e) {
            e.preventDefault();

            var target = $(this.hash);

            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000)
        });
    });

    $('#hamburger').click(function(e) {
        e.stopPropagation();
          $('.menu__mobile').slideToggle('fast', function(){
            if($(this).css('display') === 'block') {
              $('.header__menu--logo').css('z-index', '101');
              $('.header__menu--logo').css('position', 'fixed');
            } else {
              $('.header__menu--logo').css('position', 'unset');
            }
          });
        });

        $('#hamburger').click(function(){
          $(this).toggleClass('open');
          
        });

    $('.info__video--play').click(function(){

      $('.info__background').css('display', 'block');
      $('.info__youtube').css('display', 'block');
      $('.info__frame').prop('src', 'https://www.youtube.com/embed/H4p6njjPV_o');
    });

    $('.info__closed').click(function(){
      $('.info__youtube').hide();
      $('#player').prop('src', '');
      $('.info__background').css('display', 'none');
    });

    $(document).mouseup(function(e) {
      var container = $('.info__youtube');
      
    $('.info__background').css('display', 'none');
    $('#player').prop('src', '');

    if (container.has(e.target).length === 0){
        container.hide();
  }
});