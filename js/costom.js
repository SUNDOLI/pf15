$(function () {

    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            prevEl: '.main_visual .arrows .prev',
            nextEl: '.main_visual .arrows .next',
        },


    })
    const txt = ['KCSI 10년 연속 1위', '맛있는 세가지 킥', '더 가볍게 매일한끼']

    const mss = new Swiper('.main_story_slide', {
        loop: true,
        on: {
            slideChangeTransitionEnd: function () {
                let idx = this.realIndex;
                console.log(idx);
                $('.main_story .num').text("0" + (idx + 1));
                $('.main_story .tit').text(txt[idx]);

            }

        }
    })
    const MAINEVENTSLIDE = new Swiper('.main_banner_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
    })


});

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');

    })
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').slideUp();
            $(this).next().slideDown();
        }
    });


    $('.header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })
})

$(function () {
    $('.main_best .best_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_best .best_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_best .best_tab_content .con').removeClass('on');
        $('.main_best .best_tab_content .con').eq(idx).addClass('on')
    })
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk)
    })
})


