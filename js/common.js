$(function () {

    /*Slider
    ========================*/

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

    /*Slider2
    ========================*/

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

    /* Input - Offices - Checked
   ====================================*/

    var green = $('.green'),
        officesItem = $('.offices__item'),
        officesButton = $('.offices__button'),
        officesOffice1 = $('.offices__office1-input'),
        officesOffice2 = $('.offices__office2-input'),
        officesOfficeAll = $('.offices__officeAll'),
        officesInput = $('.offices__switch input'),
        officesItems = $('.offices__items-hidden');

    officesItems.hide();
    green.hide();

    officesOffice1.on("change", function() {
        if ($(this).prop('checked')) {
            officesItem.hide();
            $('.offices__office1').show();
            officesButton.show(300);
            green.hide();
            officesInput.prop('checked',false);
            $(this).prop("checked", true);
        } else {
            officesItem.hide();
            $('.offices__show').show();
        }
    });

    officesOffice2.on("change", function() {
        if ($(this).prop('checked')) {
            officesItem.hide();
            $('.offices__office2').show();
            officesButton.show(300);
            green.hide();
            officesInput.prop('checked',false);
            $(this).prop("checked", true);
        } else {
            officesItem.hide();
            $('.offices__show').show();
        }
    });

    officesOfficeAll.on("change", function() {
        if ($(this).prop('checked')) {
            officesItem.show();
            officesItems.hide();
            officesInput.prop('checked',false);
            $(this).prop("checked", true);
            officesItems.slideDown(1);
            officesButton.hide();
            green.show();
        } else {
            officesItem.show();
            officesItems.hide();
            officesButton.show();
            green.hide();
        }
    });

    /* Buttons - offices
   ====================================*/

    officesButton.on('click', function () {
        officesItem.show();
        officesItems.hide();
        officesInput.prop('checked',false);
        officesItems.slideDown(1);
        green.show();
        $(this).hide();
        officesOfficeAll.prop('checked',true);
    });

    green.on('click', function () {
        officesItem.show();
        officesItems.hide();
        officesButton.show();
        if(window.location.toString().indexOf('offices.html') > 0) {
            $('body,html').animate({scrollTop:850},800);
        } else {
            $('body,html').animate({scrollTop:1400},800);
        }
        $(this).hide();
        officesInput.prop('checked',false);
    });

    /* Hover-info
   ====================================*/

    var infoItemLink = $('.info__item a');
    infoItemLink.on('mouseover', function () {
        $(this).siblings("img").css('opacity', 0.7);
    });

    infoItemLink.on('mouseout', function () {
        $('.info__item img').css('opacity', 1);
    });

    /* Modals
   ====================================*/

    $(".personal-area-js, .password-recovery-js, .registration-js, .phone-ring-js").on("click", function(e) {
        var body = $("body");

        e.preventDefault();
        $(".modal-personal").fadeOut(100);
        body.removeClass("open-modal");

        var currentModal = $(this).attr("href");

        $(currentModal + ", #overlay-js").fadeIn(500);
        body.addClass("open-modal");

    });


    $("#overlay-js, .modal__close").on("click", function(e) {

        e.preventDefault();
        $(".modal-personal, .password-recovery, .phone-ring, .registration, #overlay-js").fadeOut(100);
        $("body").removeClass("open-modal");

    });

    /* Search-button
   ====================================*/
    $("#header_last").on("click", function (e) {
        e.preventDefault();
        $(".header__search-box").toggleClass('header__search-box--active');
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