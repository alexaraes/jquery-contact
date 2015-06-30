$(document).ready(function(){

	$btn = $('button');
	$name = $('#name');
	$email = $('#email');
	$website = $('#website');
	$message = $('#message');
	$nameEr = $('.nameEr');
	$emailEr = $('.emailEr');
	$webEr = $('.webEr');
	$msgEr = $('.msgEr');

	errorMsg = [$nameEr, $emailEr, $webEr, $msgEr];
	input = [$name,$email,$website,$message];

	$btn.on('click', check);

	function check(e){

		clearErrors();

		e.preventDefault();

		for (var i = 0; i < input.length; i++){

			if (validator.isNull(input[i].val())){

				errorMsg[i].show();
				input[i].css('border-left', '3px solid red');
			}
		}

		if (!validator.isEmail($email.val())){

			$emailEr.show();
			$email.css('border-left', '3px solid red');
			e.preventDefault();
		}
		else if (!validator.isURL($website.val())){

			$webEr.show();
			$website.css('border-left', '3px solid red');
			e.preventDefault();
		}
		else if (!$name){

			$nameEr.show();
			e.preventDefault();
		}
		else if (!$message){

			$msgEr.show();
			e.preventDefault();
		}
		else {

			showMsg(e);
			e.preventDefault();
		}

	}

	function showMsg(e){

		e.preventDefault();

		$('form').find('*').hide();
		$('#thankYou').html('<p>Thanks for contacting us ' +$name.val()+ '. We will throw your message in the trash shortly. </p>');
		$('#thankYou').show();

		
	};

	function clearErrors () {

		for(var i =0; i <errorMsg.length; i++){

			errorMsg[i].hide();
			input[i].css('border-left', '3px solid #18191F');
		}
	};

	for (var i=0; i<input.length; i++) {
		check(input[i])
	};
});