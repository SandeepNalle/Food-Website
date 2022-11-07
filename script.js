var swiper = new swiper("home-slider",{
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    loop:true,
    });

    let menu + document.querySelector('#menu1');
    let navbar = document.querySelector(',navbar');

    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
