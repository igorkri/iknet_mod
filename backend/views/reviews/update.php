<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Reviews $model */

$this->title = Yii::t('app', 'Редагувати відгук: {name}', [
    'name' => $model->id,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Відгук'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Редагувати');
?>
<div class="container reviews-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
