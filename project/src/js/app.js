const theme = document.querySelector('.theme-switch')
function toggleTheme() {
	document.body.hasAttribute('light')
		? document.body.removeAttribute('light')
		: document.body.setAttribute('light', '')
}
theme.addEventListener('click', () => {
	toggleTheme()
})
