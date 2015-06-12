$(document).ready(function(){
 
    /* ---- Countdown timer ---- */
 
    $('#counter').countdown({
        timestamp : (new Date()).getTime() + 51*24*60*60*1000
    });
 
});

$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});

/* ---- Using Modernizr to check if the "required" and "placeholder" attributes are supported ---- */
 
if (!Modernizr.input.placeholder) {
    $('.email').val('Geben Sie hier Ihre E-Mail Adresse ein ...');
    $('.email').focus(function() {
        if($(this).val() == 'Geben Sie hier Ihre E-Mail Adresse ein ...') {
            $(this).val('');
        }
    });
}
 
// for detecting if the browser is Safari
var browser = navigator.userAgent.toLowerCase();
 
if(!Modernizr.input.required || (browser.indexOf("safari") != -1 && browser.indexOf("chrome") == -1)) {
    $('form').submit(function() {
        $('.popup').remove();
        if(!$('.email').val() || $('.email').val() == 'Input your e-mail address here...') {
            $('form').append('<p class="popup">Please fill out this field.</p>');
            $('.email').focus();
            return false;
        }
    });
    $('.email').keydown(function() {
        $('.popup').remove();
    });
    $('.email').blur(function() {
        $('.popup').remove();
    });
}

/* ---- Animations ---- */
 
$('#links a').hover(
    function(){ $(this).animate({ left: 3 }, 'fast'); },
    function(){ $(this).animate({ left: 0 }, 'fast'); }
);
 
$('footer a').hover(
    function(){ $(this).animate({ top: 3 }, 'fast'); },
    function(){ $(this).animate({ top: 0 }, 'fast'); }
);