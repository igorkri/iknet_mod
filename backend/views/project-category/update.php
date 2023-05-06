<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\ProjectCategory $model */

$this->title = Yii::t('app', 'Update Project Category: {name}', [
    'name' => $model->id,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Project Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="container project-category-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
