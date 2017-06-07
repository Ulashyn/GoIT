<?php
/*
Credits: Bit Repository
URL: http://www.bitrepository.com/
*/

include 'config.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$phone = stripslashes($_POST['phone']);
$subject = stripslashes($_POST['subject']);
$message = stripslashes($_POST['message']);
$message = 'От: '.$name."\r\n".'Email: '.$email."\r\n".'Телефон: '.$phone."\r\n".'Сообщение: '.$message;
$headers = 'From: renovatio@domain.com' . "\r\n";
    
$error = '';



if(!$error)
{
$mail = mail(WEBMASTER_EMAIL, $subject, $message, $headers);


if($mail)
{
echo 'OK';
}

}


}
?>