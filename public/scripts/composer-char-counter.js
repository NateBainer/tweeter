$(document).ready(function() {

  $('textarea').on('keypress', function() {
    console.log(140 - $(this).val().length - 1);
  });

});