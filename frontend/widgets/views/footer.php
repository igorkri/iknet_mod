<?php

use yii\helpers\Url;

?>
<footer>
    <h2>Прості рішення складних завдань</h2>
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
            <h3>ПОВЕРНУТИСЯ ВГОРУ</h3>
        </a>
        <div class="footer_block">
            <div class="part">
                <h4>Карта сайту</h4>
                <a href="<?= Url::to(['/about/view']) ?>">Про компанію</a>
                <a href="#">Управління</a>
                <a href="#">Приєднання</a>
                <a href="#">Бізнес в енергетиці</a>
                <a href="#">Публікації</a>
                <a href="#">Ринок електроенергії</a>
                <a href="#">Проекти</a>
            </div>
            <div class="part">
                <h4>Про компанію</h4>
                <p>
                    ІКНЕТ – експерт в реалізації проектів альтернативної та традиційної енергетики
                    <a href="#">Докладніше →</a>
                </p>
            </div>
            <div class="part">
                <h4>Послуги</h4>
                <a href="#">Управління проектами в енергетиці</a>
                <a href="#">Приєднання об’єктів енергетики</a>
                <a href="#">Бізнес в енергетиці</a>
            </div>
            <div class="part">
                <h4>Контакти</h4>
                <p class="address">03113, Україна, м. Київ, вул. Грушецька, 9-А, оф. 102</p>
                <a href="tel:+380445910873">Тел.: +38 (044) 591-08-73</a>
                <a href="tel:+380504417020">Моб.: +38 (050) 441-70-20</a>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>© 2012-2023. ТОВ "ІКНЕТ". Всі права захищені, копіювання матеріалів тільки з вказанням зворотнього посилання.</p>
    </div>
</footer>
