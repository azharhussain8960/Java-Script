let currentIndex = 0;

function showSlide(index) {
    let slides = document.getElementsByClassName("slide");

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentIndex].style.display = "block";
}

function controlSlide(n) {
    showSlide(currentIndex + n);
}

// Initialize the slideshow
showSlide(currentIndex);
