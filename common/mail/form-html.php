<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\User $user */
/** @var common\models\FormCallback $post */



?>

<br>
<ul>
    <li>
        <b>Ім'я: </b> <?=$post['fio']?>
    </li>
    <li>
        <b>Еmail: </b> <?=$post['email']?>
    </li>
    <li>
        <b>Телефон: </b> <?=$post['phone']?>
    </li>
    <?php if(isset($post['vacancies'])): ?>
    <li>
        <b>Вакансія: </b> <?=$post['vacancies']?>
    </li>
    <?php endif; ?>
    <?php if(isset($post['code'])): ?>
    <li>
        <b>Код: </b> <?=$post['code']?>
    </li>
    <?php endif; ?>

    <?php if(isset($post['message'])): ?>
    <li>
        <b>Повідомлення: </b> <?=$post['message']?>
    </li>
    <?php endif; ?>
</ul>