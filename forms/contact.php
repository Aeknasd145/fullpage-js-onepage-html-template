<?php 
require("library/class.phpmailer.php");

if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) ){
  die('please fill in all fields!');
}

$ad = 'Website Name'; // Website Name
$email = 'info@site.com'; // E-Mail Address
$pass = 'pass'; // E-Mail Password
$secure = 'ssl'; //chose your SMTPSecure (ssl or tls)
$host = 'mail.site.com'; //update your Host like mail.site.com
$port = 465; //587 for tls, 465 for ssl (you can find your settings in your web mail

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 1; 
$mail->SMTPAuth = true; 
$mail->SMTPSecure = $secure;
$mail->Host = $host;
$mail->Port = $port;
$mail->IsHTML(true);
$mail->SetLanguage('tr', 'library/phpmailer/language');
$mail->CharSet  ='utf-8';
$mail->Username = $email; //username (web mail adress)
$mail->Password = $pass; //password (web mail password)
$mail->SetFrom($email, "Contact Form - $ad"); //forwarder mail and person
$mail->addReplyTo($_POST['email'], $_POST['name']);
$mail->AddAddress($email);
$mail->Subject = "Contact Form - $ad"; //Mail Title
$mail->Body = "Name: ".$_POST['name']."<br>Email: ".$_POST['email']."<br>Message: ".$_POST['message'];

if(!$mail->Send()){
    echo "E-mail Error: $mail->ErrorInfo";
} else {
    echo 'Successful';
}