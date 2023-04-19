<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\PageCareer $model */

$this->title = 'Редактировать: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Карьера', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редактировать';
?>
<div class="container page-career-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
