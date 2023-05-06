<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergy $model */

$this->title = 'Подарунки енергетикам';
$this->params['breadcrumbs'][] = ['label' => 'Подарунки енергетикам', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="presents-energy-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
