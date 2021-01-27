var slideIndex = 1;

window.onload = function()
{
slideWeergave(slideIndex);
}

function  slideplus(n)
{
slideWeergave(slideIndex += n);
}

function huidigeSlide(n)
{
slideWeergave(slideIndex = n);
}

function slideWeergave(n)
{
var i;
var slides = document.getElementsByClassName("container__topdetail__grid__slidecontainer__slideshow__slideFoto");
var punten = document.getElementsByClassName("container__topdetail__grid__slidecontainer__puntenLijst__punt");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}

for (i = 0; i < slides.length; i++) {punten[i].className = punten[i].className.replace(" active", "")}

slides[slideIndex-1].style.display = "block";
punten[slideIndex-1].className += " active";
}
