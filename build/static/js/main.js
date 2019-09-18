$(document).ready(function() {    
    $("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#00F",boxzoom:true}); // First scrollable DIV
  });

$('.trigger').on('click', function() {
    $('.modal-wrapper').toggleClass('open');
    return false;
});
$('.head').on('click', function (){
    $('.modal-wrapper').removeClass('open');
})
$('#click-to-close').on('click', function (){
    $('.modal-wrapper').removeClass('open');
})

var $navButton = $('.cd-nav-trigger');
var $navMenu = $('.main-nav');
var $navModal = $('.main-nav__modal');
var $mainContent = $('.cd-main-content');

$navButton.on("click", function() {
  $navButton.toggleClass('cd-nav-trigger--nav-is-visible');
  $navModal.toggleClass('main-nav__modal--open');
  $navMenu.toggleClass('main-nav-active');
  $mainContent.toggleClass('main-content--nav-active');
});


var $langButton = $('.language-toggle');
var $lang = $('.language-toggle>span');

$langButton.on("click", function() {
  $lang.toggleClass('toggle-active'); 
});