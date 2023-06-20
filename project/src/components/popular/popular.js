const swiper = new Swiper('.popular__swiper', {
	sliderPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: '.popular__dots',
		type: 'bullets'
	}
})
