function loading(status) {
  if ( status == 1 ) {
      $('#loading').fadeIn();
      $('.content-spinner').fadeIn();
  }
  else {
      $('#loading').fadeOut();
      $('.content-spinner').fadeOut();
    }
};
$(function() { // Quando a página estiver carregada
  loading(0); // Esconder o loading
});