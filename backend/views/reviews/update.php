<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Reviews $model */

$this->title = Yii::t('app', 'Редагувати відгук: {name}', [
    'name' => $model->title_uk,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Відгук'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Редагувати');
?>
<div class="container reviews-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
