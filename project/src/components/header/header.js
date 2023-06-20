import { map } from '../map/map.js'
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	animationTime = 500,
	framesCount = 144
const headerMenu = document.querySelector('.header__menu')
const burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
	toggleMenu()
})
const switchers = document.querySelectorAll('.theme-switch')
if (localStorage.getItem('theme') === 'light') {
	toggleTheme()
}

switchers.forEach(switcher => {
	switcher.addEventListener('click', () => {
		toggleTheme()
	})
})
function toggleTheme() {
	if (document.body.hasAttribute('light')) {
		localStorage.removeItem('theme')
		document.body.removeAttribute('light')
		map.classList.remove('map_light')
		switchers.forEach(switcher => {
			switcher.classList.remove('theme-light')
		})
	} else {
		localStorage.setItem('theme', 'light')
		document.body.setAttribute('light', '')
		map.classList.add('map_light')
		switchers.forEach(switcher => {
			switcher.classList.add('theme-light')
		})
	}
}
anchors.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		console.log(window.innerHeight)
		let coordY =
			document.querySelector(item.getAttribute('href')).getBoundingClientRect()
				.top + window.scrollY
		let scroller = setInterval(function () {
			let scrollBy = coordY / framesCount
			if (
				scrollBy > window.scrollY - coordY &&
				window.innerHeight + window.scrollY < document.body.offsetHeight
			) {
				window.scrollBy(0, scrollBy)
			} else {
				window.scrollTo(0, coordY)
				clearInterval(scroller)
			}
		}, animationTime / framesCount)
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
