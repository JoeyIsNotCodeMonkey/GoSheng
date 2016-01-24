// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

//expand/collapse
$(document).ready(function(){
  $("#company_info").on("hide.bs.collapse", function(){
    $(".company_info").html('<span class="glyphicon glyphicon-collapse-down"></span> 了解更多');
  });
  $("#company_info").on("show.bs.collapse", function(){
    $(".company_info").html('<span class="glyphicon glyphicon-collapse-up"></span> 收起');
  });

  //ppd
  $("#ppd").on("hide.bs.collapse", function(){
    $(".ppd").html('<span class="glyphicon glyphicon-collapse-down"></span> 了解更多');
  });
  $("#ppd").on("show.bs.collapse", function(){
    $(".ppd").html('<span class="glyphicon glyphicon-collapse-up"></span> 收起');
  });

  //lingben
  $("#lingben").on("hide.bs.collapse", function(){
    $(".lingben").html('<span class="glyphicon glyphicon-collapse-down"></span> 了解更多');
  });
  $("#lingben").on("show.bs.collapse", function(){
    $(".lingben").html('<span class="glyphicon glyphicon-collapse-up"></span> 收起');
  });
});