<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['phone']))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$phone = $_POST['phone'];
	
// Create the email and send the message
$to = 'exile-kasual@yandex.ru,alex.seishe@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Контактная форма сайта:  $name";
$email_body = "Вы получили новое сообщение от вашей контактной формы сайта.\n\n"."Вот подробности:\n\nИмя: $name\n\nТелефон: $phone";
$headers = "From: info@remdim.kiev.ua\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>