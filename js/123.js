$(document).ready(function(){
  $('.man').addClass('.block');
  if($('.man').offset().top<$('.balloon').offset().top){
    $('.man').attr('display',block);
  }
});
