const theme = document.querySelector('.theme-switch')
function toggleTheme() {
	document.body.hasAttribute('light')
		? document.body.removeAttribute('light')
		: document.body.setAttribute('light', '')
}
theme.addEventListener('click', () => {
	toggleTheme()
})
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

const plans = new Swiper('.plans__swiper', {
	slidesPerView: 2,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: '.plans__dots',
		type: 'bullets'
	}
})
