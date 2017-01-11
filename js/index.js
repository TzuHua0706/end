$(document).ready(function(){
  $(".img_1").hover(
    function(){
      $(".img_1").addClass('img_1_h');
      $(".img_1").removeClass('img_1_h_r');
    },function() {
      $(".img_1").removeClass('img_1_h');
      $(".img_1").addClass('img_1_h_r');
    }
  );
});
