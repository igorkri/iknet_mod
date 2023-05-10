<?php

use yii\helpers\Url;


$lang = \Yii::$app->session->get('_language');

if ($lang == 'ru') {
    $Read_more = 'Подробнее ';
    $a1 = 'СЭС';
    $a2 = 'Биогазовые ЭС';
    $a3 = 'ЭС на биомассе';
    $a4 = 'Стандарт';
    $a5 = 'Нестандарт';
    $a6 = 'Аудит';
    $a7 = 'Концепция';
    $a8 = 'Бизнес-план';

} elseif ($lang == 'en') {
    $Read_more = 'Read more ';
    $a1 = 'SPP';
    $a2 = 'Biogas PP';
    $a3 = 'Biomass PP';
    $a4 = 'Standard';
    $a5 = 'Non-standard';
    $a6 = 'Energy audit';
    $a7 = 'Concept';
    $a8 = 'Business plan';
} else {
    $Read_more = 'Докладніше ';
    $a1 = 'СЕС';
    $a2 = 'Біогазові ЕС';
    $a3 = 'ЕС на біомасі';
    $a4 = 'Стандарт';
    $a5 = 'Нестандарт';
    $a6 = 'Аудит';
    $a7 = 'Концепція';
    $a8 = 'Бізнес-план';
}


?>
<section class="possibilities" id="possibilities">
    <div class="block">
        <?php if($possibilitie): ?>
        <div class="item" id="management">
            <h1><?=$possibilitie->getTitle($possibilitie->id)?></h1>
            <div class="info">
                <div class="part1">
                    <img src="/img/possibilities1_1.webp" alt="">
                    <div class="links">
                        <a href="#"><?= $a1 ?> →</a>
                        <a href="#"><?= $a2 ?> →</a>
                        <a href="#"><?= $a3 ?> →</a>
                    </div>
                </div>
                <div class="part2">
                    <div class="left">
                        <?=$possibilitie->getText($possibilitie->id)?>
                    </div>
                    <div class="right">
                        <img src="/img/possibilities1_2.webp" alt="">
                        <?php if($possibilitie->tabs): ?>
                            <?php foreach($possibilitie->tabs as $tab): ?>
                                <div class="drop">
                                <div class="head">
                                    <p><?=$tab->getTitle($tab->id)?></p>
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                            fill="black" />
                                    </svg>
                                </div>
                                <div class="cont">
                                    <?=$tab->getText($tab->id)?>
                                    <?php $u = explode('/', $tab->slug);?>
                                    <a href="<?=Url::to(['/' . $u[1] . '/' . $u[2], 'slug' => $u[3]])?>"><?= $Read_more ?>→</a>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if($connection): ?>
        <div class="item" id="connection">
            <h1><?=$connection->getTitle($connection->id)?></h1>
            <div class="info">
                <div class="part1">
                    <img src="/img/possibilities2_1.webp" alt="">
                    <div class="links">
                        <a href="#"><?= $a4 ?> →</a>
                        <a href="#"><?= $a5 ?> →</a>
                    </div>
                </div>
                <div class="part2">
                    <div class="left">
                        <?=$connection->getText($connection->id)?>
                    </div>
                    <div class="right">
                        <img src="/img/possibilities2_2.webp" alt="">
                        <?php if($connection->tabs): ?>
                            <?php foreach($connection->tabs as $tab): ?>
                                <div class="drop">
                                    <div class="head">
                                        <p><?=$tab->getTitle($tab->id)?></p>
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                                    fill="black" />
                                        </svg>
                                    </div>
                                    <div class="cont">
                                        <?=$tab->getText($tab->id)?>
                                        <?php $u = explode('/', $tab->slug);?>
                                        <a href="<?=Url::to(['/' . $u[1] . '/' . $u[2], 'slug' => $u[3]])?>"><?= $Read_more ?>→</a>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php if($energy_efficiency): ?>
        <div class="item" id="energy-efficiency">
            <h1><?=$energy_efficiency->getTitle($energy_efficiency->id)?></h1>
            <div class="info">
                <div class="part1">
                    <img src="/img/possibilities3_1.webp" alt="">
                    <div class="links">
                        <a href="#"><?= $a6 ?> →</a>
                        <a href="#"><?= $a7 ?> →</a>
                        <a href="#"><?= $a8 ?> →</a>
                    </div>
                </div>
                <div class="part2">
                    <div class="left">
                        <?=$energy_efficiency->getText($energy_efficiency->id)?>
                    </div>
                    <div class="right">
                        <img src="/img/possibilities3_2.webp" alt="">
                        <?php if($energy_efficiency->tabs): ?>
                            <?php foreach($energy_efficiency->tabs as $tab): ?>
                                <div class="drop">
                                    <div class="head">
                                        <p><?=$tab->getTitle($tab->id)?></p>
                                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                                    fill="black" />
                                        </svg>
                                    </div>
                                    <div class="cont">
                                        <?=$tab->getText($tab->id)?>
                                        <?php $u = explode('/', $tab->slug);?>
                                        <a href="<?=Url::to(['/' . $u[1] . '/' . $u[2], 'slug' => $u[3]])?>"><?= $Read_more ?>→</a>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>
</section>