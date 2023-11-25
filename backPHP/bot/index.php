<?php
$botDir = __DIR__;

date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу

// если бот работает с базой данных сайта
require_once $_SERVER['DOCUMENT_ROOT'].'/config.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/lib/db.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/lib/functions.php';


function sendMessage($chat_id,$text,$buttons=null,$disable_web_page_preview=true) {
    
    global $xc;
    
    $url = 'https://api.telegram.org/bot'.$xc['bot_key'].'/sendMessage?chat_id='.$chat_id.'&parse_mode=html&text='.$text;
    
    if ($disable_web_page_preview==true) {
        $url .= '&disable_web_page_preview=true';
    }
    
    if (!empty($buttons)) {
        $url .= '&reply_markup='.$buttons;
    }
      
    $result = file_get_contents($url);
    
    return $result;
}

// конфигурационный файл бота
require_once $botDir.'/config.php';

// функции для телеграм ботов
require_once $_SERVER['DOCUMENT_ROOT'].'/bots/telegram/lib/functions.php';

// достаём из базы название и токен бота
$botInfo = db_query("SELECT * FROM bot_settings WHERE id=".$xc['bot_id']." LIMIT 1");

if ($botInfo == false) {
    exit();
}

$xc['bot_key'] = $botInfo[0]['token'];
$xc['bot_uniq_name'] = $botInfo[0]['name'];
$xc['chat_id'] = '@cb_real_estate';

$message = clearData( urldecode($_GET['message']) );

sendMessage($xc['chat_id'],$message);
  
exit('ok');