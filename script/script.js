function turny(){
var y = document.getElementById("mySpeed").value;
var x = document.getElementById("myRange").value;
$('.bg').css({'-webkit-transform' : 'rotate('+ x +'deg)',
                 '-moz-transform' : 'rotate('+ x +'deg)',
                 '-ms-transform' : 'rotate('+ x +'deg)',
                 'transform' : 'rotate('+ x +'deg)',
                 '-webkit-transition' : 'transform '+y+'s linear',
    			'-moz-transition' : 'transform '+y+'s linear',
    			'-o-transition' : 'transform '+y+'s linear',
    			'transition' : 'transform '+y+'s liear',
    		});
$('.dink').html(x);
};
$(function(){
	var currentValue = $('#currentValue');
	$(document).on( 'input change', '#myRange', function(){
	    currentValue.html(this.value);
	});$('#myRange').change();
});
$(function(){
	var currentSpeed = $('#currentSpeed');
	$(document).on( 'input change', '#mySpeed', function(){
	    currentSpeed.html(this.value);
	});$('#mySpeed').change();
});
$(function(){
	var currentPixel = $('#currentPixel');
	$(document).on( 'input change', '#myPixel', function(){
	    currentPixel.html(this.value);
var z = document.getElementById("myPixel").value;
    $('.bg').css({'background-size' : z +'px' });
	$('body').css({'background-size' : z +'px' });
	});$('#myPixel').change();
});
/*$(function(){
    $( "#myPixel" ).change(function() {
    });
});*/
$(function(){
	$('#radioButtonContainerId input:radio').click(function() {
    if ($(this).val() === 'square') {
    $('.bg').css({'background-image': 'url("images/buttons-repete.svg")'});
	$('body').css({'background-image': 'url("images/buttons-repete.svg")'});
    } else if ($(this).val() === 'triangle') {
    $('.bg').css({'background-image': 'url("images/buttons-repete2.svg")'});
	$('body').css({'background-image': 'url("images/buttons-repete2.svg")'});
    } else if ($(this).val() === 'circle') {
    $('.bg').css({'background-image': 'url("images/buttons-repete3.svg")'});
	$('body').css({'background-image': 'url("images/buttons-repete3.svg")'});
	} else if ($(this).val() === 'lines') {
    $('.bg').css({'background-image': 'url("images/buttons-repete4.svg")'});
	$('body').css({'background-image': 'url("images/buttons-repete4.svg")'});
	}
  });
});

