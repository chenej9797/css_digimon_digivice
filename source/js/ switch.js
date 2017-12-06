$(document).ready(function(){
  var switches = false;
  var num = 1;
  $('.button-left').click(function(){
    if (switches === false) {
      $('.monitor-image').addClass('pixel-1');
      $('.sound').trigger('play');
      switches = true;
      num = 1;
    } else {
      $('.monitor-image').removeClass('pixel-1');
      $('.monitor-image').removeClass('pixel-2');
      $('.monitor-image').removeClass('pixel-3');
      switches = false;
    }
  });
  $('.button-right01').click(function(){
    if (switches === true) {
      $('.sound').trigger('play');
      var pixelNum = num%3+1;
      var pixelPreNum = (num+2)%3+1;
      num += 1;
      $('.monitor-image').removeClass('pixel-'+pixelPreNum);
      $('.monitor-image').addClass('pixel-'+pixelNum);
      console.log(pixelNum+','+pixelPreNum);
    }
  });
});