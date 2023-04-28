<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Reviews $model */

$this->title = Yii::t('app', 'Create Reviews');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Reviews'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="reviews-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
