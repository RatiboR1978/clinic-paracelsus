$(function () {

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.slider2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });




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