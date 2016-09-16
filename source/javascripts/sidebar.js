$(document).ready(function() {
	headerElements = $("h1, h2, h3, h4, h5, h6");
	navElem = $("#sidebarnav")[0];
	
	for(var i=0; i < headerElements.length; i++) {
		var thisElem = headerElements[i];
		var thisId = thisElem.id;
		var thisContent = thisElem.innerHTML;

		navElem.innerHTML = navElem.innerHTML + "<li><a href=\"#" + thisId + "\">" + thisContent + "</a></li>";
	}

	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh');
	});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});

