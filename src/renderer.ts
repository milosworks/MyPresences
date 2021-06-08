//@ts-nocheck

window.addEventListener('DOMContentLoaded', () => {
	const minimizeButton = document.getElementById('minimize-btn')
	const maxUnmaxButton = document.getElementById('max-unmax-btn')
	const closeButton = document.getElementById('close-btn')
	if (!minimizeButton || !maxUnmaxButton || !closeButton) return

	minimizeButton.addEventListener('click', (e) => {
		windowControls.minimize()
	})

	maxUnmaxButton.addEventListener('click', (e) => {
		const icon = maxUnmaxButton.querySelector('i.far')
		if (!icon) return

		if (window.isWindowMaximized()) {
			windowControls.unmaximize()
			icon.classList.remove('fa-square')
			icon.classList.add('fa-clone')
		} else {
			windowControls.maximize()
			icon.classList.add('fa-square')
			icon.classList.remove('fa-clone')
		}
	})

	closeButton.addEventListener('click', (e) => {
		windowControls.close()
	})
})
