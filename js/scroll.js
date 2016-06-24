$( document ).ready(function(){
	//console.log( "ready!" );
	var top_header = $('.u1124');
	top_header.css({'background-position':'center center'}); // better use CSS

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
	});

	var second_header = $('.u1122');
	second_header.css({'background-position':'0px center'}); // better use CSS

	$(window).scroll(function () {
		var pt = $(this).scrollTop();
		var ct = (pt*0.5)-850;
		second_header.css({'background-position':'0px calc(50% + '+ct+'px)'});
	});
	
	var third_header = $('.u1123');
	third_header.css({'background-position':'0px center'}); // better use CSS

	$(window).scroll(function () {
		var ptN = $(this).scrollTop();
		var ctN = (ptN*0.5)-1500;
		third_header.css({'background-position':'0px calc('+ctN+'px)'});
	});

	var forth_header = $('.u2223');
	forth_header.css({'background-position':'0px center'}); // better use CSS

	$(window).scroll(function () {
		var ptN = $(this).scrollTop();
		var ctN = (ptN*0.5)-2500;
		forth_header.css({'background-position':'0px calc('+ctN+'px)'});
	});	
	$('#home').click(function() {
		$('html, body').animate({
			scrollTop: $('.u1124').offset().top - 100
		}, 2000);
	});
	$('#about').click(function() {
		$('html, body').animate({
			scrollTop: $('.u1155').offset().top - 100
		}, 2000);
	});
	$('#portfolio').click(function() {
		$('html, body').animate({
			scrollTop: $('#workWith').offset().top - 100
		}, 2000);
	});	
	$('#contact').click(function() {
		$('html, body').animate({
			scrollTop: $('#myLocation').offset().top - 100
		}, 2000);
	});	
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}



