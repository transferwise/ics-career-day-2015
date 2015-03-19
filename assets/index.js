var submitted = false;

function submitForm() {
  submitted = true;
}

function toggleForm() {
  if (window.location.hash == '#thank-you')
    $('#wrapper').append('<h4 class="feedback">Thank you!</h4>');
  else
    $('form').show();
}

$(window).bind('hashchange', function (e) {
  toggleForm();
});

$(function() {
  toggleForm();
});
