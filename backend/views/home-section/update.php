<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\HomeSection $model */

$this->title = 'Редагування секції: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Секції', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагування';
?>
<div class="container home-section-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
