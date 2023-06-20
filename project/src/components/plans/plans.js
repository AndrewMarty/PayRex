const plans = new Swiper('.plans__swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: '.plans__dots',
		type: 'bullets'
	}
})
