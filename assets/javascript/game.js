$(document).ready(function(){


 	

    $('#jon').click(function(){
        $('#you').html(this);
        $('#them').html($('#dany'))
        $('#them').html($('#cersei'))
        $('#middletext').text('Jon Snow');
        
    });

    $('#dany').click(function(){
        $(this).html($('#you'));
        $('#jon').html($('#them'))
        $('#cersei').html($('#them'))
        $('#middletext').text('Daenerys Targaryen');
       
    });

    $('#cersei').click(function(){
        $(this).html($('#you'));
        $('#dany').html($('#them'))
        $('#jon').html($('#them'))
        $('#middletext').text('Cersei Lannister');
        
    });



    $('#cersei, #dany, #jon').click(function() {
    	$('#attack').text('VS!');
    	$('#select').text('select a target');
        $('.col-md-4 img').css({
	        '-webkit-filter': 'grayscale(0%)',
			'-moz-filter': 'grayscale(0%)',		
			'-o-filter': 'grayscale(0%)',
        	'border': 'none'})
	}); 



});