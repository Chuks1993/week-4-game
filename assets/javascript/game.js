$(document).ready(function(){


	// Character Attributes
	var jon = {
		Name: "Jon",
		HP: 300,
		ATK: 2,
		CATK: 11
	}

	var dany = {
		Name: "Dany",
		HP: 180,
		ATK: 5,
		CATK: 15
	}

	var cersei = {
		Name: "Cersei",
		HP: 240,
		ATK: 7,
		CATK: 30
	}

	//Display Attr
	function displayAttr() {
		$('#jonAttr').text("HP: " + jon.HP + " ATK: " + jon.ATK + " CATK: " + jon.CATK);
		$('#danyAttr').text("HP: " + dany.HP + " ATK: " + dany.ATK + " CATK: " + dany.CATK);
		$('#cerseiAttr').text("HP: " + cersei.HP + " ATK: " + cersei.ATK + " CATK: " + cersei.CATK);
	}


displayAttr();

	

	

	//User and Enemy
	var user;
	var enemy;
	var characterSelected = false;
	var targetSelected = false;

    //styling
	  function cssStuff() {

	  	if (jon.HP <= 0) {
	  		$('.col-md-4 #jon img').css({
	        '-webkit-filter': 'grayscale(100%)',
			'-moz-filter': 'grayscale(100%)',
			'-o-filter': 'grayscale(100%)',
			'border': 'none'})
	  	} else if (dany.HP <= 0) {
	  		$('.col-md-4 #dany img').css({
	        '-webkit-filter': 'grayscale(100%)',
			'-moz-filter': 'grayscale(100%)',
			'-o-filter': 'grayscale(100%)',
			'border': 'none'})
	  	} else if (cersei.HP <= 0) {
	  		$('.col-md-4 #cersei img').css({
	        '-webkit-filter': 'grayscale(100%)',
			'-moz-filter': 'grayscale(100%)',
			'-o-filter': 'grayscale(100%)',
			'border': 'none'})
	  	}
    	
	  	if (jon === enemy) {
	  		$('.col-md-4 #jon img').css({
	        'border': '5px solid red'})
	  	} else if (dany === enemy) {
	  		$('.col-md-4 #dany img').css({
	        'border': '5px solid red'})
	  	} else if (cersei === enemy) {
	  		$('.col-md-4 #cersei img').css({
	        'border': '5px solid red'})
	  	}

        if (characterSelected === false) {
			$('#attack').text('VS!');
	    	$('#select').text('select a target');
	        $('.col-md-4 img').css({
	        '-webkit-filter': 'grayscale(0%)',
			'-moz-filter': 'grayscale(0%)',		
			'-o-filter': 'grayscale(0%)',
        	'border': 'none'});
		} else if (targetSelected === true) {
			$('#select').text('Click Attack!');
			$('#attack').html('<button type="button" class="btn btn-danger">Attack!</button>');
		}
	}; 


	$('#jon').click(function(){
		if (characterSelected === false) {
			user = jon;
			$('#jon').removeClass('col-md-4');
			$('#user').html($('#jon'));
			$('#enemy').html($('#dany, #cersei'));
			cssStuff();	
			characterSelected = true;
		} else if (targetSelected === false) {
			enemy = jon;
			console.log(enemy);
			targetSelected = true;
			cssStuff();
		}

	})

	$('#dany').click(function(){ 
		if (characterSelected === false) {
			user = dany;
			$('#dany').removeClass('col-md-4');
			$('#user').html($('#dany'));
			$('#enemy').html($('#jon, #cersei'));
			cssStuff();
			characterSelected = true;	
		} else if (targetSelected === false) {
			enemy = dany;
			console.log(enemy);
			targetSelected = true;
			cssStuff();
		}

		
	})

	$('#cersei').click(function(){
		if (characterSelected === false) {
			user = cersei;
			$('#cersei').removeClass('col-md-4');
			$('#user').html($('#cersei'));
			$('#enemy').html($('#dany, #jon'));
			cssStuff();
			characterSelected = true;  
		}	else if (targetSelected === false) {
			enemy = cersei;
			console.log(enemy);
			targetSelected = true;
			cssStuff();
		}

		
	})

	//user attacks enemy
	$('#attack').click(function(){
		if (characterSelected === true && targetSelected === true) {
			user.ATK = user.ATK + user.ATK;
			user.HP = user.HP - enemy.CATK;
			enemy.HP = enemy.HP - user.ATK;
			
			$('#select').text(user.Name + " does " + user.ATK + " damage to " + enemy.Name + "! " + enemy.Name + " counters with " + enemy.CATK + "!");
			if (user.HP === 0 || user.HP < 0) {
				alert("Game Over! You have been defeated!");
			} else if ((jon === user && cersei.HP <= 0 && dany.HP <= 0) || (dany === user && jon.HP <= 0 && cersei.HP <= 0) || (cersei === user && jon.HP <= 0 && dany.HP <= 0)) {
				alert("VICTORY!");
			} else if (enemy.HP <= 0) {
				alert(enemy.Name + ' has been defeated. Select a new target.');
				targetSelected = false;
			} 
		}

		displayAttr();
	})

	
	



  

});