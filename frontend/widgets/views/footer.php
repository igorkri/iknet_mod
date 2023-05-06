<?php

use yii\helpers\Url;


$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
    $telName = 'Тел: ';
    $h2Cont = 'Контакты';
    $copy = 'ООО "ИКНЕТ". Все права защищены, копирование материалов только с указанием обратной ссылки.';
    $buttonTop = 'ВЕРНУТЬСЯ ВВЕРХ';
    $h2Service = 'Услуги';
    $h4About = 'О компании';
    $textAbout = 'ИКНЕТ – эксперт по реализации проектов альтернативной и традиционной энергетики';
    $buttonAbout = 'Подробнее';
    $mapSite = 'Карта сайта';
    $h2Other = 'Простые решения сложных задач';

}elseif($lang == 'en'){
    $telName = 'Phone: ';
    $h2Cont = 'Contacts';
    $copy = 'IKNET LLC. All rights reserved, copying of materials only with the indication of a return link.';
    $buttonTop = 'GO BACK UP';
    $h2Service = 'Services';
    $h4About = 'About the company';
    $textAbout = 'IKNET is an expert in the implementation of alternative and traditional energy projects';
    $buttonAbout = 'Read more';
    $mapSite = 'Site map';
    $h2Other = 'Simple solutions to complex problems';
}else{
    $telName = 'Тел: ';
    $h2Cont = 'Контакти';
    $copy = 'ТОВ "ІКНЕТ". Всі права захищені, копіювання матеріалів тільки з вказанням зворотнього посилання.';
    $buttonTop = 'ПОВЕРНУТИСЯ ВГОРУ';
    $h2Service = 'Послуги';
    $h4About = 'Про компанію';
    $textAbout = 'ІКНЕТ – експерт в реалізації проектів альтернативної та традиційної енергетики';
    $buttonAbout = 'Докладніше';
    $mapSite = 'Карта сайту';
    $h2Other = 'Прості рішення складних завдань';

}
?>
<footer>
    <h2><?=$h2Other?></h2>
    <div class="animation">
        <div class="footer_city">
            <img src="/img/footer_city.webp" alt="">
            <div class="propeller">
                <img src="/img/propeller.webp" alt="">
            </div>
            <div class="propeller">
                <img src="/img/propeller.webp" alt="">
            </div>
            <div class="propeller">
                <img src="/img/propeller.webp" alt="">
            </div>
            <div class="light">
                <img src="/img/light.webp" alt="">
            </div>
            <div class="light_window n1"></div>
            <div class="light_window n2"></div>
            <div class="light_window n3"></div>
            <div class="light_window n4"></div>
        </div>
    </div>
    <div class="info">
        <a href="#new_header" class="to_top">
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.82306 1.6775C8.62178 0.736767 10.0735 0.736766 10.8723 1.6775L17.3758 9.33739C18.4789 10.6366 17.5555 12.6318 15.8512 12.6318L2.84407 12.6318C1.13977 12.6318 0.216406 10.6366 1.31947 9.33739L7.82306 1.6775Z"
                    fill="" />
            </svg>
            <h3><?=$buttonTop?></h3>
        </a>
        <div class="footer_block">
            <div class="part">
                <h4><?=$mapSite?></h4>
                <a href="<?= Url::to(['/about/view']) ?>">Про компанію</a>
                <a href="#">Управління</a>
                <a href="#">Приєднання</a>
                <a href="#">Бізнес в енергетиці</a>
                <a href="#">Публікації</a>
                <a href="#">Ринок електроенергії</a>
                <a href="#">Проекти</a>
            </div>
            <div class="part">
                <h4><?=$h4About?></h4>
                <p>
                    <?=$textAbout?>
                    <a href="#"><?=$buttonAbout?> →</a>
                </p>
            </div>
            <div class="part">
                <h4><?=$h2Service?></h4>
                <a href="#">Управління проектами в енергетиці</a>
                <a href="#">Приєднання об’єктів енергетики</a>
                <a href="#">Бізнес в енергетиці</a>
            </div>
            <div class="part">
                <h4><?=$h2Cont?></h4>
                <p class="address"><?=$contact->getAdress($contact->id)?></p>
                <a href="tel:<?=str_replace([' ', '(', ')', '-'], '', $contact->tel1)?>"><?=$telName?><?= $contact->tel1 ?></a>
                <a href="tel:<?=str_replace([' ', '(', ')', '-'], '', $contact->tel2)?>"><?=$telName?><?= $contact->tel2 ?></a>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>© 2012-<?=date('Y')?>. <?=$copy?></p>
    </div>
</footer>
