const slider = document.querySelectorAll('.slider-page')
const prevButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')
const slideCount = slider.length
let slideIndex = 0

prevButton.addEventListener('click', showPreviousSlide)
nextButton.addEventListener('click', showNextSlide)

function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount
	updateSlider()
}

function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount
	updateSlider()
}

function updateSlider() {
	slider.forEach((slide, index) => {
		if (index === slideIndex) {
			slide.style.display = 'flex'
		} else {
			slide.style.display = 'none'
		}
	})
}
setInterval(showNextSlide, 4000)
updateSlider()
