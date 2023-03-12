// AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
$('.work .btn-secondary').on('click', function (e) {
    e.preventDefault();
    $(this).parent().prev().toggleClass('active');
});
$('.team .btn-secondary').on('click', function (e) {
    e.preventDefault();
    $(this).parent().prev().toggleClass('active');
});
$('.play-button').on('click', function (e) {
    var $this = $(this);
    // $('.step-media__video').find('video').attr('controls', true);
    $this.find('img').toggleClass('hidden');
    $this.toggleClass('pause');
    if($this.hasClass('pause')){}
    if($this.next().hasClass('active')){
        $this.next().trigger('pause').removeClass('active');
        $this.parent().removeClass('active');
    }else{
        $this.next().trigger('play').addClass('active');
        $this.parent().addClass('active');
    }
});
$('#video-info').on('click', function (e) {
    var $this = $(this);
    // $('.step-media__video').find('video').attr('controls', true);
    $('.play-button img').toggleClass('hidden');
    $this.toggleClass('pause');
    if($this.hasClass('pause')){}
    if($this.hasClass('active')){
        $this.trigger('pause').removeClass('active');
        $this.parent().removeClass('active');
    }else{
        $this.trigger('play').addClass('active');
        $this.parent().addClass('active');
    }
});
function videoEnded() {

}
$('.reviews-slider').slick({
    infinite: true,
    dots: false,
    prevArrow: $('.reviews .prev'),
    nextArrow: $('.reviews .next'),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrow: false,
                dots: true,
            }
        },
        {
            breakpoint: 520,
            settings: {
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow: false,
                dots: true,
            }
        }
    ]
});
$('.question-item__title').on('click', function (e) {
    var $this = $(this);
    $this.next().slideToggle().toggleClass('active');
    $this.parent().toggleClass('active');
});
$('.license-slider__inner').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.license .prev'),
    nextArrow: $('.license .next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 567,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
$('.partner-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.partner .prev'),
    nextArrow: $('.partner .next'),
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});
$(document).mouseup(function (e){
    var div = $('.header-phone, .header-nav, .header-btn');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('body').removeClass('scroll');
        $('.header, .header-btn').removeClass('active');
    }
});
$('.header-nav a').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('scroll');
    $('.header, .header-btn').removeClass('active');
    var $thsHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($thsHref).offset().top - 100
    }, 1000);
});
$('.footer-nav a').on('click', function (e) {
    e.preventDefault();
    var $thsHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($thsHref).offset().top
    }, 1000);
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $ths = $(this);
    $ths.toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
