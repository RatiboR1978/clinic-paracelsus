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

    $('.slider .slide').css('opacity', '1');

    $('.slider2').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.slide').css('opacity', '1');

    /*Button - Up
    ========================*/

    $(window).scroll(function() {

        if($(this).scrollTop() !== 0) {
            $('.bt-up').fadeIn();
        } else {
            $('.bt-up').fadeOut();
        }
    });

    $('.bt-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });

    var green = $('.green'),
        officesItems = $('.offices__items-hidden');

    officesItems.hide();
    green.hide();

    $('.offices__button').on('click', function () {
        officesItems.slideDown("slow");
        $('.green').show(300);
        $(this).hide();
    });

    green.on('click', function () {
        officesItems.slideUp("slow");
        $('.offices__button').show(300);
        $(this).hide();
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