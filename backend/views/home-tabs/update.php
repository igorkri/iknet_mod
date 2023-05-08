<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\HomeTabs $model */

$this->title = 'Редагування Tabs: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Список', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->title_uk, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагування';
?>
<div class="container home-tabs-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
