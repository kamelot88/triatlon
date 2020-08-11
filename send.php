<?php
$uchastok = $_POST['Uchastok'];
$fio = $_POST['FIO'];
$phone = $_POST['Phone'];
$uchastok = htmlspecialchars($uchastok);
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$uchastok = urldecode($uchastok);
$fio = urldecode($fio);
$phone = urldecode($phone);
$uchastok = trim($uchastok);
$fio = trim($fio);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("VasilchenkoOV@outlook.com", "Заявка на ТРИАТЛОН", "Участок:".$uchastok." ФИО:".$fio.". Телефон: ".$phone ,"From: triatlon@dom.com \r\n"))
 {     echo "Заявка успешно отправлено";
} else {
    echo "при отправке заявки возникли ошибки";
}?>