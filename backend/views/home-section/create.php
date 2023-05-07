<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\HomeSection $model */

$this->title = 'Створення секції';
$this->params['breadcrumbs'][] = ['label' => 'Секції', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container home-section-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
