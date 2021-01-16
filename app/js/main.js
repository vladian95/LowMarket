$(function() {

//Новые поступления (Index Page)   
$('.product__objects').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false
});

//

//Специальные предложения (Index Page)   
$('.product__slider-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false
});
    
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


 //Show the dropdown Menu (Caterofy and Favorites Pages)
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown Menu (Caterofy and Favorites Pages)
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
