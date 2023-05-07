<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\search\HomeSectionSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="home-section-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
        'options' => [
            'data-pjax' => 1
        ],
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'title_uk') ?>

    <?= $form->field($model, 'title_en') ?>

    <?= $form->field($model, 'title_ru') ?>

    <?= $form->field($model, 'slug') ?>

    <?php // echo $form->field($model, 'order') ?>

    <?php // echo $form->field($model, 'published') ?>

    <?php // echo $form->field($model, 'description_uk') ?>

    <?php // echo $form->field($model, 'description_en') ?>

    <?php // echo $form->field($model, 'description_ru') ?>

    <?php // echo $form->field($model, 'image') ?>

    <?php // echo $form->field($model, 'image_2') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
