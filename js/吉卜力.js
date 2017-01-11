$(document).ready(function(){
  $('.head_img_ticket').hover(
    function(){
      $(".head_img_ticket").attr("src","img/訂票hover3.png");
      $(".head_img_ticket").removeClass('head_img_ticket_a');
    },function() {
      $(".head_img_ticket").attr("src","img/訂票3.png");
      $(".head_img_ticket").addClass('head_img_ticket_a');
    }
  );
  $('.head_img_ticket').click(function(){
    $('html,body').animate({scrollTop: $('.p_ticket').offset().top},500);
  });
  $('#chgicon').hover(
    function(){
      $("#chgicon").attr("src","img/點5.png");
      $("#chgicon").addClass('b_2');
      $("#chgicon").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_1").addClass('op1');
      $("#b_p_1").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_7").addClass('op0');
      $("#b_p_8").addClass('op0');
    },function() {
      $("#chgicon").attr("src","img/點3.png");
      $("#chgicon").addClass('b');
      $("#chgicon").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_1").removeClass('op1');
    }
  );
  $("#chgicon").click(function(){
    $('html,body').animate({scrollTop: $('.img_look').offset().top},500);
  });
  $('#chgicon2').hover(
    function(){
      $("#chgicon2").attr("src","img/點5.png");
      $("#chgicon2").addClass('b_2');
      $("#chgicon2").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_2").addClass('op1');
      $("#b_p_2").removeClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_7").addClass('op0');
      $("#b_p_8").addClass('op0');
    },function() {
      $("#chgicon2").attr("src","img/點3.png");
      $("#chgicon2").addClass('b');
      $("#chgicon2").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_2").removeClass('op1');
    }
  );
  $("#chgicon2").click(function(){
    $('html,body').animate({scrollTop: $('.img_time').offset().top},500);
  });
  $('#chgicon3').hover(
    function(){
      $("#chgicon3").attr("src","img/點5.png");
      $("#chgicon3").addClass('b_2');
      $("#chgicon3").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_3").addClass('op1');
      $("#b_p_3").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_7").addClass('op0');
      $("#b_p_8").addClass('op0');

    },function() {
      $("#chgicon3").attr("src","img/點3.png");
      $("#chgicon3").addClass('b');
      $("#chgicon3").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_3").removeClass('op1');
    }
  );
  $("#chgicon3").click(function(){
    $('html,body').animate({scrollTop: $('.img_where').offset().top},500);
  });
  $('#chgicon4').hover(
    function(){
      $("#chgicon4").attr("src","img/點5.png");
      $("#chgicon4").addClass('b_2');
      $("#chgicon4").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_4").addClass('op1');
      $("#b_p_4").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_7").addClass('op0');
      $("#b_p_8").addClass('op0');

    },function() {
      $("#chgicon4").attr("src","img/點3.png");
      $("#chgicon4").addClass('b');
      $("#chgicon4").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_4").removeClass('op1');
    }
  );
  $("#chgicon4").click(function(){
    $('html,body').animate({scrollTop: $('.history_title').offset().top},500);
  });
  $('#chgicon5').hover(
    function(){
      $("#chgicon5").attr("src","img/點5.png");
      $("#chgicon5").addClass('b_2');
      $("#chgicon5").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_5").addClass('op1');
      $("#b_p_5").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_7").addClass('op0');
      $("#b_p_8").addClass('op0');
    },function() {
      $("#chgicon5").attr("src","img/點3.png");
      $("#chgicon5").addClass('b');
      $("#chgicon5").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_5").removeClass('op1');
    }
  );
  $("#chgicon5").click(function(){
    $('html,body').animate({scrollTop: $('.map').offset().top},500);
  });
  $('#chgicon6').hover(
    function(){
      $("#chgicon6").attr("src","img/點5.png");
      $("#chgicon6").addClass('b_2');
      $("#chgicon6").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_6").addClass('op1');
      $("#b_p_6").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_7").addClass('op0');
      $("#b_p_8").addClass('op0');

    },function() {
      $("#chgicon6").attr("src","img/點3.png");
      $("#chgicon6").addClass('b');
      $("#chgicon6").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_6").removeClass('op1');
    }
  );
  $("#chgicon6").click(function(){
    $('html,body').animate({scrollTop: $('.img_ticket').offset().top},500);
  });
  $('#chgicon7').hover(
    function(){
      $("#chgicon7").attr("src","img/點5.png");
      $("#chgicon7").addClass('b_2');
      $("#chgicon7").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_7").addClass('op1');
      $("#b_p_7").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_8").addClass('op0');

    },function() {
      $("#chgicon7").attr("src","img/點3.png");
      $("#chgicon7").addClass('b');
      $("#chgicon7").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_7").removeClass('op1');
    }
  );
  $("#chgicon7").click(function(){
    $('html,body').animate({scrollTop: $('.p_ticket').offset().top},500);
  });
  $('#chgicon8').hover(
    function(){
      $("#chgicon8").attr("src","img/點5.png");
      $("#chgicon8").addClass('b_2');
      $("#chgicon8").removeClass('b');
      $("#b_p").removeClass('b_p');
      $("#b_p").addClass('b_animation');
      $("#b_p").removeClass('b_animation_2');
      $("#b_p_8").addClass('op1');
      $("#b_p_8").removeClass('op0');
      $("#b_p_2").addClass('op0');
      $("#b_p_3").addClass('op0');
      $("#b_p_4").addClass('op0');
      $("#b_p_5").addClass('op0');
      $("#b_p_6").addClass('op0');
      $("#b_p_1").addClass('op0');
      $("#b_p_7").addClass('op0');

    },function() {
      $("#chgicon8").attr("src","img/點3.png");
      $("#chgicon8").addClass('b');
      $("#chgicon8").removeClass('b_2');
      $("#b_p").removeClass('b_animation');
      $("#b_p").addClass('b_animation_2');
      $("#b_p").addClass('b_p');
      $("#b_p_8").removeClass('op1');
    }
  );
  $("#chgicon8").click(function(){
    $('html,body').animate({scrollTop: $('footer').offset().top},500);
  });
  $(".go_ticket").click(function(){
    alert("前往購票");
  });
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
    if($('.t_n').offset().top<$('.img_down').offset().top){
      $('html,body').animate({scrollTop: $('.t_n').offset().top},500);
    }
    else {
      if($('.img_ticket').offset().top<$('.img_down').offset().top){
        $('html,body').animate({scrollTop: $('.img_ticket').offset().top},500);
      }
      else {
        if($('.map_n').offset().top<$('.img_down').offset().top){
          $('html,body').animate({scrollTop: $('.map_n').offset().top},500);
        }
        else {
          if($('.map').offset().top<$('.img_down').offset().top){
            $('html,body').animate({scrollTop: $('.map').offset().top},500);
          }
          else {
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
          }
        }
      }
    }    
  });
});
