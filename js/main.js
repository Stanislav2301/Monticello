let menuActive =  $(document).ready(function() { 
    $('.burger').click(function (event) {
        $('.burger, .menu__list').toggleClass('active');
    });
});

let sliderHeader = $(document).ready(function(){ 
    $('.slider-header').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
});

let sliderNews = $(document).ready(function(){ 
    $('.slider-latest').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                arrows: false
                }  
            },
            
            {
                breakpoint: 426,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                arrows: false
                }  
            }    
        ]
    });
});

let imageZoom = (() => {
    let $el = document.querySelector('.gallery__items');
    $el.addEventListener('click', function (e) {
        const tgt = e.target;
        tgt.classList.toggle('zoomed');
    })
})();
