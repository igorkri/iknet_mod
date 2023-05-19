<?php

use kartik\file\FileInput;
use kartik\form\ActiveForm;
use yii\helpers\Html;
use yii\helpers\Url;

$this->title = Yii::t('app', 'Додавання картинок');

?>

<div class="container presents-energy-list-form">

    <?php
    $form = ActiveForm::begin(); ?>

    <div class="form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

        <?= $form->field($model, 'file')->widget(FileInput::class, [
            'language' => 'uk',
            'options' => [
                'accept' => 'image/*',
                'multiple' => true,
            ],
            'pluginOptions' => [
                'deleteUrl' => Url::to(['/upload-ajax/remove-img', 'page' => 'presents-list', 'file' => $model->file ? $model->file : 'no', 'field' => 'file']),
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
                    'onclick' => 'return confirm("Ви впевнені що хочете видалити?")',
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


    <?php ActiveForm::end(); ?>

</div>
