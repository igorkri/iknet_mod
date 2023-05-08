<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\NewsCategory $model */

$this->title = Yii::t('app', 'Редагувати Категорії новин: {name}', [
    'name' => $model->title_uk,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Категорії новин'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Редагувати');
?>
<div class="container news-category-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
