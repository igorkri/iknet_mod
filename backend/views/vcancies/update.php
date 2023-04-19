<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Vacancies $model */

$this->title = 'Редактирование: ' . $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Вакансии', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редактирование';
?>
<div class="container vacancies-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
