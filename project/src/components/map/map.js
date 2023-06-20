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
export { map }
