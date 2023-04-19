<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\ClientsBrand $model */

$this->title = 'Редактирование : ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Клиенты', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редактировать';
?>
<div class="container clients-brand-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
