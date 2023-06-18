const swiper = new Swiper('.popular__swiper', {
	sliderPerView: 2,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: '.popular__dots',
		type: 'bullets'
	}
})
