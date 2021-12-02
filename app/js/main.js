$(function () {
    $('.home-section__slider').slick ({
        infinite: true,
        fade: true,
        prevArrow: '<button class="home-section__slider-btn home-section__slider-btnprev "><img src="../images/arrow-left.svg"</button>',
        nextArrow: '<button class="home-section__slider-btn home-section__slider-btnnext "><img src="../images/arrow-right.svg"</button>'
    })
    $('.why-section__slider').slick ({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    })
})