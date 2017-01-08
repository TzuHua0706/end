$(document).ready(function(){
  var img_height = $('#box').height();
  var img_width = $('#box').width();
  var img_x = $('.box').offset().left;
  var img_y = $('.box').offset().top;
  $('.img').click(function(){
    $('.box').height( img_height+10);
    $('.box').width(img_width+10);
    $('#box').addClass('block');
    $('#box').removeClass('display');
    $("#box").offset(function(n,c){
    	  newPos=new Object();
        newPos.left=c.left+img_x-5;
        newPos.top=c.top+5;
        return newPos;
    });
  });
});
