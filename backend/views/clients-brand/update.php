<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\ClientsBrand $model */

$this->title = 'Редагування : ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Клієнти', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагувати';
?>
<div class="container clients-brand-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
