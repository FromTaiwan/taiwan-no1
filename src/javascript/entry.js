$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', './dist/assets/media/taiwan-no1.mp3');
  // audioElement.setAttribute('autoplay', 'autoplay');

  audioElement.addEventListener('load', function() {
    // audioElement.play();
  }, true);

  $('.paly-btn').click(function() {
    audioElement.play();
    $('.taiwan-gif').removeClass('content-hidden');
  });

  $('.taiwan-gif').click(function() {
    $('.taiwan-gif').addClass('content-hidden');
  });
});
