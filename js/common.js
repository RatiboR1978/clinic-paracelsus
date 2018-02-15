$(function () {

    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        adaptiveHeight: true
    });

    $('.slider2').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    if($('.slide1').hasClass("slick-active")) {
        setTimeout(function () {
            $('.galleries__description').addClass('galleries__description-active');
        }, 1000)
    } else {
        $('.galleries__description').removeClass('galleries__description-active');
    }

    $('.slick-arrow').on('click', function () {
        if($('.slide1').hasClass("slick-active")) {
            setTimeout(function () {
                $('.galleries__description').addClass('galleries__description-active');
            }, 1000)
        } else {
            $('.galleries__description').removeClass('galleries__description-active');
        }

    })





});

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [56.81934557, 60.61528800],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([56.81934557, 60.61528800], { hintContent: 'ул. Большакова, д. 68', balloonContent: '' });

    myMap.geoObjects.add(myPlacemark);
}