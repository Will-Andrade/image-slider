const sliderImgs = document.querySelectorAll('[data-js="slider-item"]');
const prevSlideBtn = document.querySelector('[data-js="slider-btn-prev"]');
const nextSlideBtn = document.querySelector('[data-js="slider-btn-next"]');

let sliderIndex = 0;

const prevSlideClickHandler = () => {
    sliderImgs[sliderIndex].classList.remove('slider-item__visible');
    const correctIndex = sliderIndex === 0 ? sliderIndex = sliderImgs.length - 1 : --sliderIndex;
    sliderImgs[correctIndex].classList.add('slider-item__visible');
};

const nextSlideClickHandler = () => {
    sliderImgs[sliderIndex].classList.remove('slider-item__visible');
    sliderIndex === sliderImgs.length - 1 ? sliderIndex = 0 : ++sliderIndex;
    sliderImgs[sliderIndex].classList.add('slider-item__visible');
}

prevSlideBtn.addEventListener('click', prevSlideClickHandler);
nextSlideBtn.addEventListener('click', nextSlideClickHandler);
