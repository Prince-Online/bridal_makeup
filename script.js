const slider = document.getElementById('slider');
const openButton = document.getElementById('openSlider');
const closeButton = document.getElementById('closeSlider');

openButton.addEventListener('click', () => {
    slider.style.right = '0';
});

closeButton.addEventListener('click', () => {
    slider.style.right = '-340px';
});

function reload(){
    location.reload();
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

showSlides();

const texts = [
    "Welcome to the shuffle page!",
    "This is text number one.",
    "Enjoy the magic of shuffling.",
    "Every 4 seconds, things change!",
    "Stay curious and keep learning."
];

const textContainer = document.getElementById("text-container");

function shuffleText() {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    textContainer.textContent = randomText;
}

setInterval(shuffleText, 4000);

shuffleText();
