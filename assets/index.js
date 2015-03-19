var submitted = false;

console.log("What are you doing here? Get back to your tasks!");

function submitForm() {
  submitted = true;
}

function toggleForm() {
  if (window.location.hash == '#thank-you') {
    $('form').hide();
    $('.good-job-wrapper').show();
  } else {
    $('form').show();
    $('.good-job-wrapper').hide();
  }
}

$(window).bind('hashchange', function () {
  toggleForm();
});

$(function() {
  toggleForm();
});