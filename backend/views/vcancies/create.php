<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Vacancies $model */

$this->title = 'Створення вакансій';
$this->params['breadcrumbs'][] = ['label' => 'Вакансії', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container vacancies-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
