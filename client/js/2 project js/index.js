Template.index.onRendered(function () {
  $(".js-height-full").height($(window).height());
		$(window).resize(function(){
			$(".js-height-full").height($(window).height());
		});
    var x= $("#get-height").height();
    var y= x/3;
     console.log("dilan22", x);
    console.log("dilan", y);
   $(".blue-color-bg").css("height", +y+"px");
// Get IE or Edge browser version
var version = detectIE();

if (version === false) {
  
} else if (version >= 12) {
  $('.wp1').css('visibility','visible');
$('.wp2').css('visibility','visible');
    $('.wp3').css('visibility','visible');
    $('.wp1-1').css('visibility','visible');
    $('.wp2-1').css('visibility','visible');
} else {
  
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

        
});
Template.index.events({ 

}); 