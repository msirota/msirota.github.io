$(document).ready(function(){
  // Smooth Scrolling
  var $root = $('html, body');
  $('.nav li a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });
  // Close Nav Bar
  $('.nav li a').click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
    $('.navbar-collapse').collapse('hide');
  });
});
