<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergyList $model */

$this->title = 'Створення енергетичного списку презентів';
$this->params['breadcrumbs'][] = ['label' => 'Всі', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container presents-energy-list-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
