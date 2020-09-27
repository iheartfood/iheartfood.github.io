function getIEversion() {
  var ua = window.navigator.userAgent
  var msie = ua.indexOf ( "MSIE " )

  if ( msie > 0 )      // If Internet Explorer, return version number
    return parseInt (ua.substring (msie+5, ua.indexOf (".", msie )))
  else                 // If another browser, return 0
    return 0
}

var ieVersion = getIEversion();
if (ieVersion < 9 && ieVersion > 0) {
  window.location = 'http://outdatedbrowser.com/en';
}

$('#mood-switcher a.light').click(function(event) {
  $('html').removeClass('dark');
  event.preventDefault();
});

$('#mood-switcher a.dark').click(function(event) {
  $('html').addClass('dark');
  event.preventDefault();
});
