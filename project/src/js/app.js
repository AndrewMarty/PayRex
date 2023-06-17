const theme = document.querySelector('.theme-switch')
theme.addEventListener('click', () => {
	toggleTheme()
	console.log('g')
})
function toggleTheme() {
	document.body.hasAttribute('light')
		? document.body.removeAttribute('light')
		: document.body.setAttribute('light', '')
}
