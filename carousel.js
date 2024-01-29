let indicator = 0;
let slides = document.getElementsByClassName("spain");
let slideInterval;
let slideTime = prompt("Please enter the time (in seconds) you want each slide to stay on the screen");
slideTime = slideTime * 1000;
const dots = document.getElementsByClassName("column");


showSlides();
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.display = "block";
    }
    indicator++;
    if (indicator > slides.length) {
        indicator = 1;
    }
    slides[indicator - 1].style.display = "block";
    dots[indicator - 1].style.backroundColor = "red"
    slideInterval = setTimeout(showSlides, slideTime);
}

function prevSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.display = "block";
    }
    indicator--;
    if (indicator < 1) {
        indicator = slides.length;
    }
    slides[indicator - 1].style.display = "block";
    dots[indicator - 1].style.backroundColor = "red"
}

function nextSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //slides[i].style.display = "block";
    }
    indicator++
    if (indicator > slides.length) {
        indicator = 1;
    }
    slides[indicator - 1].style.display = "block";
    dots[indicator - 1].style.backroundColor = "red"
}

function playSlide() {
    slideInterval = setTimeout(showSlides, slideTime);
}

function stopSlide() {
    clearTimeout(slideInterval);
}

function currentSlide(n) {
    slides[n].style.display = "block";
}

