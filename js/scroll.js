$(document).ready(function(){

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
var ct = (pt*0.5)-1000;
second_header.css({'background-position':'0px calc(50% + '+ct+'px)'});
});

/*var logo_header = $('#logo');
var menu_header = $('#top-menus');
logo_header.css({'display':'block'});
menu_header.css({'position':'relative'});
$(window).scroll(function () {
var pt = $(this).scrollTop();
if(pt >= 84){
   //logo_header.css({'display':'none'});
   menu_header.css({'position':'fixed', 'top':'0'}); 
}else if(pt <= 84){
   //logo_header.css({'display':'block'});
   menu_header.css({'position':'relative'});
}
});*/
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
