<?php
/*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$theme = $_POST["theme"];
$textarea = $_POST["message"];


/*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
if($name=="" or $lastname=="" or $email=="" or $theme=="" or $textarea==""){
    echo "Заполните все поля";
}

else{
    /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
    $to = "nava-company@gmail.com"; /* Адрес, куда отправляем письма*/
    $subject = "Письмо компании"; /*Тема письма*/
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <navauser@gmail.com>\r\n";/*ОТ КОГО*/

    /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
    $message .= "Имя пользователя: ".$name."\n";
    $message .= "Фамилия: ".$lastname."\n";
    $message .= "Почта: ".$email."\n";
    $message .= "Тема: ".$theme."\n";
    $message .= "Сообщение: ".$textarea."\n";

    /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/
    //print_r($message);

    $send = mail($to, $subject, $message, $headers);

    /*ЕСЛИ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО ВЫВОДИМ СООБЩЕНИЕ*/
    if ($send == "true")
    {
        echo "<p style='color: #000; margin: 30px 30px 0;'>Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n</p>";
    }
    /*ЕСЛИ ПИСЬМО НЕ УДАЛОСЬ ОТПРАВИТЬ ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ*/
    else
    {
        echo "<p style='color: #000; margin: 30px 30px 0;'>Не удалось отправить, попробуйте снова!</p>";
    }
}
?>