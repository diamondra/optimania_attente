<?php
$to = "diamondrastier@gmail.com";
$subject = "This is my email";
$message = "jdjjdj";
$send = mail($to, $subject, $message);
if(!$send){    
    die();  
}
?>