$(window).on( 'load', function(){
  setTimeout(function () {
    $('body').addClass('page-loading-step1');
  }, 300 );
  setTimeout(function () {
    $('body').addClass('page-loading-step2');
  }, 600 );
  setTimeout(function () {
    $('body').addClass('page-loading-step3');
  }, 900 );
  setTimeout(function () {
    $('body').addClass('page-loading-step4');
  }, 1200 );
  setTimeout(function () {
    $('body').addClass('page-loading-step5');
  }, 1500 );
});