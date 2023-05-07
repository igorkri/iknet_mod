<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Reclaimed $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="container reclaimed-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="row">
        <div class="col-6">
            <?= $form->field($model, 'qty')->textInput() ?>
            <?php //$form->field($model, 'order')->textInput() ?>
        </div>
        <div class="col-6">
            <?= $form->field($model, 'published')->dropDownList(
                [
                    1 => 'Так',
                    0 => 'Ні'
                ]
            )->label('Опубліковано (Так | Ні)')?>
        </div>
    </div>
    <div class="row">
        <div class="col-10">
            <?= $form->field($model, 'title_uk')->textarea(['maxlength' => true]) ?>
        </div>

        <div class="col-2">
            <?= $form->field($model, 'value_uk')->textInput(['maxlength' => true]) ?>
        </div>
    </div>

    <div class="row">
        <div class="col-10">
            <?= $form->field($model, 'title_en')->textarea(['maxlength' => true]) ?>
        </div>

        <div class="col-2">
            <?= $form->field($model, 'value_en')->textInput(['maxlength' => true]) ?>
        </div>
    </div>
    <div class="row">
        <div class="col-10">
            <?= $form->field($model, 'title_ru')->textarea(['maxlength' => true]) ?>
        </div>

        <div class="col-2">
            <?= $form->field($model, 'value_ru')->textInput(['maxlength' => true]) ?>
        </div>
    </div>
    <div class="form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
