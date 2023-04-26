<?php

use kartik\file\FileInput;
use kartik\form\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;

?>

<div class="container presents-energy-list-form">

    <?php
    $form = ActiveForm::begin(); ?>
        <?php // $form->field($model, 'presents_energy_list_id')->textInput() ?>
        <?= $form->field($model, 'file')->widget(FileInput::class, [
            'language' => 'uk',
            'options' => [
                'accept' => 'image/*',
                'multiple' => true,
            ],
            'pluginOptions' => [
                'maxFileCount' => 10,
                'showRemove' => false,
                'showUpload' => false,
            ],
        ]);?>
    <?php if(!empty($is_images)): ?>
    <div class="row">
    <?php foreach ($is_images as $image): ?>
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="<?=Yii::$app->request->hostInfo .'/images/presents-list/' . $image->file?>" class="card-img-top" alt="...">
            <div class="card-body">
            <?php
            echo Html::a('Видалити',
                ['delete-img', 'id' => $image->id],
                [
                    'class' => 'btn btn-xs btn-danger',
                    'onclick' => 'return confirm("Ви впевнені що хочете видалити")',
                    'data' => [
                        'method' => 'post',
                    ],
                ]
            );
            ?>
            </div>
        </div>
        </div>
    <?php endforeach; ?>
    </div>
    <?php endif; ?>
        <br>
        <br>
    <div class="form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
