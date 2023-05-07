<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Reclaimed $model */

$this->title = 'Update Reclaimed: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Reclaimeds', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="container reclaimed-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
