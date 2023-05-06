<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Projects $model */

$this->title = Yii::t('app', 'Create Projects');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Projects'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container projects-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
