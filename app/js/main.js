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
    $('.reviews-section__slider').slick ({
        infinite: true,
        fade: true,
        prevArrow: '<button class="reviews-section__slider-btn reviews-section__slider-btnprev "><img src="../images/reviews-arrow-left.svg"</button>',
        nextArrow: '<button class="reviews-section__slider-btn reviews-section__slider-btnnext "><img src="../images/reviews-arrow-right.svg"</button>'
    })
    $('.training-section__slider').slick ({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true
    })

    // form-styler
    $(".filter-style").styler();
})