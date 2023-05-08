<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Pages $model */

$this->title = 'Редагування: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Сторінки', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагування';
?>
<div class="container pages-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
