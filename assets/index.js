var submitted = false;

function submitForm() {
  submitted = true;
  toggleForm();
}

function toggleForm() {
  if (window.location.hash == '#thank-you')
    $('#wrapper').append('<h4 class="feedback">Thank you!</h4>');
  else
    $('form').show();
}

$(function() {
  toggleForm();
});
