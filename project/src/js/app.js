const switchers = document.querySelectorAll('.theme-switch')
const burger = document.querySelector('.burger')
const headerMenu = document.querySelector('.header__menu')
const map = document.querySelector('.map')
const mapPoints = document.querySelectorAll('.map__item')

map.addEventListener('click', event => {
	const target = event.target
	if (target.closest('.map__item')) {
		showMapInfo(target.closest('.map__item'))
	}
	if (target.classList.contains('map__info-block-close')) {
		closeMapInfo(target.closest('.map__info-block'))
	}
})
burger.addEventListener('click', () => {
	toggleMenu()
})
switchers.forEach(switcher => {
	switcher.addEventListener('click', () => {
		toggleTheme()
	})
})
function closeMapInfo(point) {
	point.classList.remove('map__info-block_active')
}
function showMapInfo(point) {
	mapPoints.forEach(point => {
		point
			.querySelector('.map__info-block')
			.classList.remove('map__info-block_active')
	})
	point
		.querySelector('.map__info-block')
		.classList.add('map__info-block_active')
}
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
