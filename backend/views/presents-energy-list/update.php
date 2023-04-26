<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergyList $model */

$this->title = 'Редагування: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Всі', 'url' => ['index']];
$this->params['breadcrumbs'][] = 'Редагування';
?>
<div class="container presents-energy-list-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
