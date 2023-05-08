<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Projects $model */

$this->title = Yii::t('app', 'Редагувати проєкти: {name}', [
    'name' => $model->title_uk,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Проєкти'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Редагувати');
?>
<div class="container projects-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
