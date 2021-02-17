$(function () {
    

    $('.shop__filter-btn').on('click', function(){
        $('.shop__filters').slideToggle();
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });


/////////////////////////
    $('.product-slider__items').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/btn-arrow/slider-prev.svg" alt="btn arrow"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/btn-arrow/slider-next.svg" alt="btn arrow"></button>',
        responsive: [
            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 805,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    })
///////////////////////////






///////////////////////////////
    $('.text-2, .text-3').hide();

    $('.btn-1').on('click', function(e){
        e.preventDefault();
        $('.text-1').fadeIn(600);
        $('.text-2').hide(500);
        $('.text-3').hide(500);
        $(this).addClass('btn--onfocus');
        $('.btn-2').removeClass('btn--onfocus');
        $('.btn-3').removeClass('btn--onfocus');
    });

    $('.btn-2').on('click', function(e){
        e.preventDefault();
        $('.text-2').fadeIn(600);
        $('.text-1').hide(500);
        $('.text-3').hide(500);
        $(this).addClass('btn--onfocus');
        $('.btn-1').removeClass('btn--onfocus');
        $('.btn-3').removeClass('btn--onfocus');
    });

    $('.btn-3').on('click', function(e){
        e.preventDefault();
        $('.text-3').fadeIn(600);
        $('.text-1').hide(500);
        $('.text-2').hide(500);
        $(this).addClass('btn--onfocus');
        $('.btn-1').removeClass('btn--onfocus');
        $('.btn-2').removeClass('btn--onfocus');
    });
///////////////////////////
   






////////////////////////////
    $('.product-detalis__input').styler();
/////////////////////////





///////////////////////////////////
   $('.product-detalis__thumb').slick({
       vertical: true,
       arrows: false,
       asNavFor: '.product-detalis__big',
       focusOnSelect: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 1081,
          settings: {
            vertical: false,

          }
        },
    ]
   })

   $('.product-detalis__big').slick({
       arrows: false,
       asNavFor: '.product-detalis__thumb',
       draggable: false,
       fade: true,
   })
////////////////////////////////////





//////////////////////////////////////////
    $('.shop-item__icon').hide();

    $('.shop-item__btn').each(function(i){
        $(this).on('click', function(e){ 
            e.preventDefault();
            $('.shop-item__btn').eq(i).hide(300);
            $('.shop-item__icon').eq(i).fadeIn(500);
        })
    })

    $('.shop-item__cart').each(function(i){
        $(this).on('click', function(e){ 
            e.preventDefault();
            $('.shop-item__icon').eq(i).hide(300);
            $('.shop-item__btn').eq(i).fadeIn(500);
        })
    })

    $('.shop-item__heart').on('click', function(e){
        e.preventDefault()
        $(this).toggleClass('shop-item__heart--active')
    });
/////////////////////////////////////////////








////////////////////////////////////////
    $('.filter-category__sort').styler();

    $('.filter-category__sort').on('click', function(){
        $(this).addClass('filter-category__sort--active');
    });
    
    $('.filter--default').on('click', function(){
        $('.filter--default').removeClass('filter-category__sort--active');
    });
//////////////////////////////////











/////////////////////////////
    $('.filter-price__input').ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.filter-price__min').text(data.from);
            $('.filter-price__max').text(data.to);
        },
        onChange: function (data) {
            console.log(data);
            $('.filter-price__min').text(data.from);
            $('.filter-price__max').text(data.to);
        },
    });
//////////////////////////////

 



////////////////////////////////
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
/////////////////////////////








///////////////////////////////////
    $('.partners__inner, .partners-login__inner').slick({ 
        autoplay: true,
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 475,
              settings: {
                slidesToShow: 2,
              }
            },
        ]
    });
/////////////////////////////








////////////////////////////////
    // const searchBtn = $('.search__btn');
    // const cancelBtn = $('.search__cancel');
    // const searchBox = $('.search');
    // const searchInput = $('.search__input');

    // searchBtn.on('click', function () {
    //     searchBox.addClass('active');
    //     searchInput.addClass('active');
    //     searchBtn.addClass('active');
    //     cancelBtn.addClass('active');
    // })

    // cancelBtn.on('click', function () {
    //     searchBox.removeClass('active');
    //     searchInput.removeClass('active');
    //     searchBtn.removeClass('active');
    //     cancelBtn.removeClass('active');
    // })
/////////////////////////////







////////////////////////////
    $(".recent-products__star").rateYo({
        readOnly: true,
        starWidth: "10px",
        normalFill: "#ccc",
    });

    $(".shop-item__star, .product-detalis__star").rateYo({
        readOnly: true,
        starWidth: "20px",
        normalFill: "#ccc",
        starWidth: "20px",
    });
///////////////////////////////


/////////////////////////////
let mixer1 = mixitup('.product__items', {
    selectors: {
        control: '.filter-1'
    }
});

let mixer2 = mixitup('.design__items', {
    selectors: {
        control: '.filter-2'
    }
});
/////////////////////////


});