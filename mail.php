<?php

/* https://api.telegram.org/bot5558007855:AAGWTOWMFn3ntC98ZhzPiG8bVsI6jp4nYvw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$sname = $_POST['user_sname'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['message'];
$token = "5558007855:AAGWTOWMFn3ntC98ZhzPiG8bVsI6jp4nYvw";
$chat_id = "-871940879";
$arr = array(
  'Имя: ' => $name,
  'Фамилия: ' => $sname,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Сообщение: ' => $message,
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>