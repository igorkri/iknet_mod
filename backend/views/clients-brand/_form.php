<?php

use kartik\file\FileInput;
use kartik\form\ActiveForm;
use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\ClientsBrand $model */
/** @var yii\widgets\ActiveForm $form */
?>
<div class="container">

<div class="clients-brand-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>
<div class="row">
    <div class="col-9">
        <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
    </div>
    <div class="col-3">
        <?= $form->field($model, 'published')->dropDownList([null => 'Пусто' ] + [
                1 => 'Так',
                0 => 'Ні',
            ]); ?>
    </div>
</div>

    <?php // $form->field($model, 'slug')->textInput(['maxlength' => true]) ?>

    <?php if($model->isNewRecord): ?>
        <?= $form->field($model, 'file')->widget(FileInput::class, [
            'language' => 'uk',
            'options' => ['accept' => 'image/*'],
            'pluginOptions' => [
                'maxFileCount' => 1,
                'showRemove' => false,
                'showUpload' => false,
            ],
        ]);?>
    <?php else: ?>
        <?= $form->field($model, 'file')->widget(FileInput::class, [
            'language' => 'uk',
            'options' => ['accept' => 'image/*'],
            'pluginOptions' => [
                'maxFileCount' => 1,
                'showRemove' => false,
                'showUpload' => false,
                'initialPreview'=>[
                    Yii::$app->request->hostInfo . '/images/client-brand/' . $model->file
                ],
                'initialPreviewAsData'=>true,
            ],
        ]);?>
    <?php endif; ?>

    <?php ActiveForm::end(); ?>

</div>

</div>
