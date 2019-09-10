
        // Initialize Slidebars
        var controller = new slidebars();
        controller.init();

        // Toggle Slidebars
        $( '.toggle-id-1' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-1' );
        });

               // Toggle Slidebars
        $( '.toggle-id-2' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-2' );
        });
                // Toggle Slidebars
        $( '.toggle-id-3' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-3' );
        });
                 // Toggle Slidebars
        $( '.toggle-id-4' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-4' );
        });
                 // Toggle Slidebars
        $( '.toggle-id-5' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-5' );
        });
                 // Toggle Slidebars
        $( '.toggle-id-6' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-6' );
        });
                 // Toggle Slidebars
        $( '.toggle-id-7' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-7' );
        });
                    // Toggle Slidebars
        $( '.toggle-id-8' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-8' );
        });
        $( '.toggle-id-9' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-9' );
        });
         $( '.toggle-id-10' ).on( 'click', function ( event ) {
          // Stop default action and bubbling
          event.stopPropagation();
          event.preventDefault();

          // Toggle the Slidebar with id 'id-1'
          controller.toggle( 'id-10' );
        });

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector(".video-player");
var iconPlayButton = document.querySelector(".skip__icon");
var iconStopButton = document.querySelector(".pause__icon");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    iconPlayButton.classList.add("active-player__element--del");
    iconStopButton.classList.remove("active-player__element--del");
    iconStopButton.classList.add("active-player__element");
  } else {
    vid.pause();
    iconStopButton.classList.add("active-player__element--del");
    iconPlayButton.classList.remove("active-player__element--del");
    iconPlayButton.classList.add("active-player__element");
  }
});

$('.trigger').on('click', function() {
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
    return false;
});
$('.head').on('click', function (){
    $('.modal-wrapper').removeClass('open');
})



$(function () {
  $('.smart-basket__wrapper').smbasket({
    productElement: 'product__element',
    buttonAddToBasket: 'product__add-to-cart-button',
    countryCode: '+38',
    smartBasketCurrency: '₴',
    productQuantityWrapper: 'product__quantity',
    smartBasketMinArea: 'header__basket-min',
    productPrice: 'product__price-number',
    smartBasketMinText: ' ',
    smartBasketMinIconPath: 'static/images/nocompilesvg/shopping-basket-wight.svg',
  });
});

 

var $easyzoom = $('.easyzoom');
 $(function () {
    if($(window).width() > 1024) {
       $easyzoom.easyZoom()
    }
  });

$('#scroll', '#scroll-nav', '#scroll-smell', '#scroll-pay-dist', '#scroll-stock-big','#scroll-stock-small','#scroll-security', '#scroll-packaging', 'scroll-mount').customScroll({
  prefix: 'custom-scroll-pretty_',
});

svg4everybody({});

var closeButton = document.querySelector("#click-to-close");
var audi = document.getElementById("audi");

closeButton.addEventListener("click", function() {
   audi.classList.toggle("click-close");
});

var numOfClicks = 0;
var $subToggleList = $('#sub-list-article');

$subToggleList.on('click', function() {
  ++numOfClicks;
  $subToggleList.toggleClass('hover', numOfClicks % 2 !== 0);
});

var numOfClicks2 = 0;
var $subToggleList2 = $('#sub-list-price');

$subToggleList2.on('click', function() {
  ++numOfClicks2;
  $subToggleList2.toggleClass('hover', numOfClicks2 % 2 !== 0);
});
 
var $sidebar = $('[off-canvas ~= left]');
var $main = $('#canvas');


$('.reset').on('click', function() {
    $sidebar.fadeOut(500);
    $main.css('transform', 'none'); 
});
 

$(".order-popup").click(function(e) {
  e.preventDefault();
  $(".smart-basket").addClass('smart-basket_active');
})