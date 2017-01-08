$(document).ready(function(){
  $("#where_up").click(function(){
    $("#where_down").addClass("p_where_r");
    $("#where_up").addClass("where_color");
    $("#where_down").removeClass("where_color");
    $("#where_up").removeClass("p_where_r");
    $("#where_up_img").addClass("block");
    $("#where_down_img").addClass("display");
    $("#where_up_img").removeClass("display");
    $("#where_down_img").removeClass("block");
  });
  $("#where_down").click(function(){
    $("#where_down").addClass("where_color");
    $("#where_up").addClass("p_where_r");
    $("#where_down").removeClass("p_where_r");
    $("#where_up").removeClass("where_color");
    $("#where_up_img").addClass("display");
    $("#where_down_img").addClass("block");
    $("#where_up_img").removeClass("block");
    $("#where_down_img").removeClass("display");
  });
  $(".img_down").click(function(){
    if($('.history_21').offset().top<$('.img_down').offset().top){
      $('html,body').animate({scrollTop: $('.history_21').offset().top},500);
    }
    else {
      if($('.history_20').offset().top<$('.img_down').offset().top){
        $('html,body').animate({scrollTop: $('.history_20').offset().top},500);
      }
      else {
        if($('.history_19').offset().top<$('.img_down').offset().top){
          $('html,body').animate({scrollTop: $('.history_19').offset().top},500);
        }
        else {
          if($('.history_18').offset().top<$('.img_down').offset().top){
            $('html,body').animate({scrollTop: $('.history_18').offset().top},500);
          }
          else {
            if($('.history_17').offset().top<$('.img_down').offset().top){
              $('html,body').animate({scrollTop: $('.history_17').offset().top},500);
            }
            else {
              if($('.history_16').offset().top<$('.img_down').offset().top){
                $('html,body').animate({scrollTop: $('.history_16').offset().top},500);
              }
              else {
                if($('.history_15').offset().top<$('.img_down').offset().top){
                  $('html,body').animate({scrollTop: $('.history_15').offset().top},500);
                }
                else {
                  if($('.history_14').offset().top<$('.img_down').offset().top){
                    $('html,body').animate({scrollTop: $('.history_14').offset().top},500);
                  }
                  else {
                    if($('.history_13').offset().top<$('.img_down').offset().top){
                      $('html,body').animate({scrollTop: $('.history_13').offset().top},500);
                    }
                    else {
                      if($('.history_12').offset().top<$('.img_down').offset().top){
                        $('html,body').animate({scrollTop: $('.history_12').offset().top},500);
                      }
                      else {
                        if($('.history_11').offset().top<$('.img_down').offset().top){
                          $('html,body').animate({scrollTop: $('.history_11').offset().top},500);
                        }
                        else {
                          if($('.history_10').offset().top<$('.img_down').offset().top){
                            $('html,body').animate({scrollTop: $('.history_10').offset().top},500);
                          }
                          else {
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
                                                if($('.img_where').offset().top<$('.img_down').offset().top){
                                                $('html,body').animate({scrollTop: $('.img_where').offset().top},500);
                                                }
                                                else{
                                                  $('html,body').animate({scrollTop: $('.img_time').offset().top},500);
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
    }
  });
});
