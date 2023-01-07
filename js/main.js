$(document).ready(function() {
  $('.screen').text('');

  $('.number').click(function(){
    const number = $('.number').eq($(this).index('.number')).text();
    $('.number').eq($(this).index('.number')).addClass('active');
    $('.screen').append(number);
  });

  $('.number.clear').click(function(){
    $('.number').removeClass('active');
    $('.screen').text('');
  });
});
