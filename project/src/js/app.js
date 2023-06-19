const switchers = document.querySelectorAll('.theme-switch')
const burger = document.querySelector('.burger')
const headerMenu = document.querySelector('.header__menu')
const map = document.querySelector('.map')
burger.addEventListener('click', () => {
	toggleMenu()
})
switchers.forEach(switcher => {
	switcher.addEventListener('click', () => {
		toggleTheme()
	})
})

function toggleMenu() {
	burger.classList.toggle('burger_active')
	if (burger.classList.contains('burger_active')) {
		headerMenu.classList.add('header__menu_active')
	} else {
		headerMenu.classList.remove('header__menu_active')
	}
}
function toggleTheme() {
	if (document.body.hasAttribute('light')) {
		document.body.removeAttribute('light')
		map.classList.remove('map_light')
		switchers.forEach(switcher => {
			switcher.classList.remove('theme-light')
		})
	} else {
		document.body.setAttribute('light', '')
		map.classList.add('map_light')
		switchers.forEach(switcher => {
			switcher.classList.add('theme-light')
		})
	}
}
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
