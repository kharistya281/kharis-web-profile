// navbar fix
window.addEventListener("scroll", function(){
    const header = document.getElementById('navbar');
    const fixNav = header.offsetTop;


    if(window.innerWidth >=768){
        if(window.scrollY > fixNav){
            header.classList.add('navbar-fixed');
        } else{
            header.classList.remove('navbar-fixed');
        }
    } else {
        header.classList.remove("navbar-fixed");
    }
});

// carousel
// const carousel = document.getElementById('carousel');
// const slides = carousel.children.length;
// let index = 0;

// document.getElementById('next').onclick=()=>{
//     index = (index + 1)% slides;
//     carousel.style.transform = `translateX(-${index*100}%)`;
// };

// document.getElementById('prev').onclick=()=>{
//     index = (index - 1 + slides)% slides;
//     carousel.style.transform = `translateX(-${index*100}%)`;
// };
document.querySelectorAll('.carousel-container').forEach(container=>{
    const carousel = container.querySelector('.carousel');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    let index = 0;
    const totalSlides = carousel.children.length;

    function updateCarousel(){
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', ()=>{
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    next.addEventListener('click', ()=>{
        index = (index + 1) % totalSlides;
        updateCarousel();
    });
});