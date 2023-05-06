<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergy $model */

$this->title = 'Редагувати: ' . $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Подарунки енергетикам', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагувати';
?>
<div class="container presents-energy-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
