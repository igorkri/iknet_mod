<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PageCareer $model */

$this->title = 'Редагувати: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Кар\'єра', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагувати';
?>
<div class="container page-career-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
