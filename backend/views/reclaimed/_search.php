<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\search\ReclaimedSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="reclaimed-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'title_uk') ?>

    <?= $form->field($model, 'title_en') ?>

    <?= $form->field($model, 'title_ru') ?>

    <?= $form->field($model, 'value_uk') ?>

    <?php // echo $form->field($model, 'value_en') ?>

    <?php // echo $form->field($model, 'value_ru') ?>

    <?php // echo $form->field($model, 'qty') ?>

    <?php // echo $form->field($model, 'order') ?>

    <?php // echo $form->field($model, 'published') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
