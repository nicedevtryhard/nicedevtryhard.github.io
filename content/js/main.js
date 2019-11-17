$(() => {
  $('.menuToggle').on('click', () => {
      $('.menu').slideToggle(400, () => {

          if($('.menu').css('display') === 'none'){
              $('.menu').removeAttr('style');
          }

      });
  });
	$(window).on('resize', () => {
		if ($(window).width() > 559) {
			console.log('559');
			$('.menu').removeAttr('style');
		}
	});
});