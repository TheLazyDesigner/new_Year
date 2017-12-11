$(window).on( 'load', function(){
  $('body').addClass('page-loading-step1');
  setTimeout(function () {
    $('#layer-gif-1 img').attr('src','assets/images/season_winter_icone-coeur.gif');
  }, 2000 );
  setTimeout(function () {
    $('#layer-gif-2 img').attr('src','assets/images/season_winter_icone-sapin.gif');
  }, 3000 );
  setTimeout(function () {
    $('#layer-gif-3 img').attr('src','assets/images/season_winter_icone-luge.gif');
  }, 6000 );
});