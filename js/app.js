const sliderImgs = document.querySelectorAll('[data-js="slider-item"]');
const prevSlideBtn = document.querySelector('[data-js="slider-btn-prev"]');
const nextSlideBtn = document.querySelector('[data-js="slider-btn-next"]');

let sliderIndex = 0;

prevSlideBtn.addEventListener('click', () => {
    sliderImgs[sliderIndex].classList.remove('slider-item__visible');
    sliderIndex === 0 ? sliderIndex = sliderImgs.length - 1 : sliderIndex--;
    sliderImgs[sliderIndex].classList.add('slider-item__visible');
});

nextSlideBtn.addEventListener('click', () => {
    sliderImgs[sliderIndex].classList.remove('slider-item__visible');
    sliderIndex === sliderImgs.length - 1 ? sliderIndex = 0 : sliderIndex++;
    sliderImgs[sliderIndex].classList.add('slider-item__visible');

});
