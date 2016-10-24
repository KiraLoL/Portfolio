var main = function() {
    $('.icon-menu-close').hide();
  $('.icon-menu').click(function() {
      $('.icon-menu').hide();
      $('.icon-menu-close').show();
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('.jumbotron').animate({
      left: "285px"
    }, 200);
  });

  $('.icon-close').click(function() {
      $('.icon-menu-close').hide();
      $('.icon-menu').show();
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('.jumbotron').animate({
      left: "0px"
    }, 200);
  });
    $('.close').click(function() {
                $('.icon-menu-close').hide();
        $('.icon-menu').show();
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('.jumbotron').animate({
      left: "0px"
    }, 200);
  });
    };


$(document).ready(main);

