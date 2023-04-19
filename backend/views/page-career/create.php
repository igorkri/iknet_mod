<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\PageCareer $model */

$this->title = 'Створення сторінки';
$this->params['breadcrumbs'][] = ['label' => 'Всі', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container page-career-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
