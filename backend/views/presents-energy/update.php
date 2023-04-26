<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergy $model */

$this->title = 'Update Presents Energy: ' . $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Presents Energies', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="presents-energy-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
