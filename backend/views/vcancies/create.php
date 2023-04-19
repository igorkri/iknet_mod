<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Vacancies $model */

$this->title = 'Create Vacancies';
$this->params['breadcrumbs'][] = ['label' => 'Vacancies', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container vacancies-create">

    <h4><?= Html::encode($this->title) ?></h4>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
