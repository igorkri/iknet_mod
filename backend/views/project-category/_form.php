<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\ProjectCategory $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="project-category-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'slug')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'parent_id')->textInput() ?>

    <?= $form->field($model, 'order')->textInput() ?>

    <?= $form->field($model, 'published')->textInput() ?>

    <?= $form->field($model, 'image')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_description_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_description_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_description_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_keywords_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_keywords_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_keywords_ru')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
