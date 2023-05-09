<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\News $model */

$this->title = 'Редагувати: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Новини', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагувати';
?>
<div class="container news-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
