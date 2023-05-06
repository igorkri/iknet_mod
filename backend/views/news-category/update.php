<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\NewsCategory $model */

$this->title = Yii::t('app', 'Update News Category: {name}', [
    'name' => $model->id,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'News Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="container news-category-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
