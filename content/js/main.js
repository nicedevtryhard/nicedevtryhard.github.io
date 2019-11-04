$(() => {
  $('.menuToggle').on('click', () => {
      $('.menu').slideToggle(400, () => {

          if($('.menu').css('display') === 'none'){
              $('.menu').removeAttr('style');
          }

      });
  });
});