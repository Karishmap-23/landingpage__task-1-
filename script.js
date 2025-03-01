let currentIndex=0;
const slides=document.querySelectorAll('.slide');
const totalslides=slides.length;
const slider=document.querySelector('.slider');
const video=document.getElementById('sliderVideo');
function changeSlide(direction){
    if(slides[currentIndex].querySelector('video')){
        video.pause();
    }
    currentIndex=(currentIndex+direction+totalslides)%totalslides;
    slider.style.transform=`translateX(-${currentIndex*100}%)`;

    if(slides[currentIndex].querySelector('video')){
        video.play();
    }
}
