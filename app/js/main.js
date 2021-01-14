$(function() {
    
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

