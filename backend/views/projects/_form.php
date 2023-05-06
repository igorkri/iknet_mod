<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Projects $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="projects-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'slug')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'created_at')->textInput() ?>

    <?= $form->field($model, 'updated_at')->textInput() ?>

    <?= $form->field($model, 'category_id')->textInput() ?>

    <?= $form->field($model, 'menu_id')->textInput() ?>

    <?= $form->field($model, 'published')->textInput() ?>

    <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'text_uk')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'seo_title_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_description_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_keywords_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'text_en')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'seo_title_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_description_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_keywords_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'text_ru')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'seo_title_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_description_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'seo_keywords_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image_og')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
