$(function() {

//product__slider-inner (Index Page)   
$('.product__slider-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false
});

let slickBtnLeft = document.querySelector('.slick-prev.slick-arrow');
slickBtnLeft.textContent = '';

let slickBtnRight = document.querySelector('.slick-next.slick-arrow');
slickBtnRight.textContent = '';

//
    
//Tabs(Card Page)    
$('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

//Tabs(Cabinet Page)   
$('.cabinet__wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.cabinet__wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.cabinet__wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

});

