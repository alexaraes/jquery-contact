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
	e.preventDefault();

	clearErrors();
	console.log(input[0].val());

	for(var i = 0; i < input.length; i++){

		if(validator.isNull(input[i].val())){
			console.log('true');
			e.preventDefault();
			errorMsg[i].show();
			input[i].css('border-left', '3px solid red');
		}
	}

	
	if(checkEmail(e) && checkSite(e)){

		if(validator.isNull($name) && validator.isNull($message) ){
			$nameEr.show();
			$msg.show();
			e.preventDefault();
		}
		else if(validator.isNull($name)){
			$nameEr.show();
			e.preventDefault();
		}
		else if (validator.isNull($message)){
			$msg.show();
			e.preventDefault();	
		}
		else {

			showMsg(e);
		}
		
	}
	else {
		e.preventDefault();
	}

}

function checkEmail(e){

	if(!validator.isEmail($email.val())){
		
		$emailEr.show();
		$email.css('border-left', '3px solid red');
		e.preventDefault();
	
	}
	else{
		return true
	}
}

function checkSite(e){

	if(!validator.isURL($website.val())){
		e.preventDefault();
		$webEr.show();
		$website.css('border-left', '3px solid red');
		
	}
	else {
		return true
	}
}

function showMsg(e){

	e.preventDefault();
	$('form').find('*').hide();
	$('#empty').html('<p>Thanks for contacting us ' +$name.val()+ '. Your information will be used to steal your organs. </p>');
	$('#empty').show();

	
}	

function clearErrors () {

	for(var i =0; i <errorMsg.length; i++){

		errorMsg[i].hide();
		input[i].css('border-left', '3px solid #18191F');
	}
}

});