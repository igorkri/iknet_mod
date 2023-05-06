<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Pages $model */

$this->title = 'Редактирование: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Страницы', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редактирование';
?>
<div class="container pages-update">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
