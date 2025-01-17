/* eslint-disable no-undef */
// Behaviour of the "scroll back to top" button

const backToTop = () => {
  $("html, body").animate({ scrollTop: 0 }, '500', "linear", () => {
    $(".new-tweet").slideDown();
    $("textarea").focus();
  });
};

$(document).ready(()  => {

  $('main  button').hide();

  (window).scroll(() => {
    if ((window).scrollTop() > 400) {
      $('main  button').fadeIn();
      $('nav .new-msg').fadeOut();
    } else {
      $('main button').fadeOut();
      $('nav .new-msg').fadeIn();
    }
  });

  $('main  button').on("click", () => {
    backToTop();
  });

});