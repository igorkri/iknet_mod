<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Reclaimed $model */

$this->title = 'Create Reclaimed';
$this->params['breadcrumbs'][] = ['label' => 'Reclaimeds', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container reclaimed-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
