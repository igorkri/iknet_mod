<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Vacancies $model */

$this->title = 'Редагування: ' . $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Вакансії', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагування';
?>
<div class="container vacancies-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
