let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 

    setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    slideIndex += n - 1; 
    if (slideIndex > document.getElementsByClassName("mySlides").length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("mySlides").length }
    showSlides(); 
}

function currentSlide(n) {
    slideIndex = n; 
    showSlides(); 
}
