<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergy $model */

$this->title = 'Create Presents Energy';
$this->params['breadcrumbs'][] = ['label' => 'Presents Energies', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="presents-energy-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
