var submitted = false;

function submitForm() {
  submitted = true;

  setTimeout(function () {
    $('form').slideUp(800, function () {
      $('#wrapper').append('<h4 class="feedback">Thank you!</h4>');
    });
  }, 1000);
}