$(document).ready(function(){
  $(".img_down").click(function(){
    if($('.history_9').offset().top<$('.img_down').offset().top){
      $('html,body').animate({scrollTop: $('.history_9').offset().top},500);
    }
    else {
      if($('.history_8').offset().top<$('.img_down').offset().top){
        $('html,body').animate({scrollTop: $('.history_8').offset().top},500);
      }
      else {
        if($('.history_7').offset().top<$('.img_down').offset().top){
          $('html,body').animate({scrollTop: $('.history_7').offset().top},500);
        }
        else {
          if($('.history_6').offset().top<$('.img_down').offset().top){
            $('html,body').animate({scrollTop: $('.history_6').offset().top},500);
          }
          else {
            if($('.history_5').offset().top<$('.img_down').offset().top){
              $('html,body').animate({scrollTop: $('.history_5').offset().top},500);
            }
            else {
              if($('.history_4').offset().top<$('.img_down').offset().top){
                $('html,body').animate({scrollTop: $('.history_4').offset().top},500);
              }
              else {
                if($('.history_3').offset().top<$('.img_down').offset().top){
                  $('html,body').animate({scrollTop: $('.history_3').offset().top},500);
                }
                else{
                  if($('.history_2').offset().top<$('.img_down').offset().top){
                    $('html,body').animate({scrollTop: $('.history_2').offset().top},500);
                  }
                  else{
                    if ($('.history_1').offset().top<$('.img_down').offset().top) {
                      $('html,body').animate({scrollTop: $('.history_1').offset().top},500);
                    }
                    else {
                      if($('.history_title').offset().top<$('.img_down').offset().top){
                        $('html,body').animate({scrollTop: $('.history_title').offset().top},500);
                      }
                      else {
                        if($('.p_where').offset().top<$('.img_down').offset().top){
                        $('html,body').animate({scrollTop: $('.p_where').offset().top},500);
                        }
                        else{
                          $('html,body').animate({scrollTop: $('.p_time').offset().top},500);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
});
  /*$(selector).animate(styles,speed,easing,callback)*/
