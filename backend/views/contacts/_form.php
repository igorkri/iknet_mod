<?php

use kartik\file\FileInput;
use mihaildev\ckeditor\CKEditor;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

use mihaildev\elfinder\ElFinder;

mihaildev\elfinder\Assets::noConflict($this);

/** @var yii\web\View $this */
/** @var common\models\Contacts $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="container contacts-form">

    <?php $form = ActiveForm::begin([
        'id' => 'contacts-form',
        'options' => [
            'class' => 'form-horizontal',
            'enctype' => 'multipart/form-data'
        ]
    ]); ?>

    <div class="row">
        <div class="col d-flex justify-content-end">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="uk-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">UK</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="en-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">EN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="ru-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">RU</a>
                </li>
            </ul>
        </div>
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>
    <div>
        <div class="row">

            <div class="col-6">
            <?= $form->field($model, 'tel1')->textInput(['maxlength' => true]) ?>
            </div>

            <div class="col-6">
            <?= $form->field($model, 'tel2')->textInput(['maxlength' => true]) ?>
            </div>
        </div>
        <div class="row">

            <div class="col-6">
            <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>
            </div>

            <div class="col-6">
            <?= $form->field($model, 'site')->textInput(['maxlength' => true]) ?>
            </div>
        </div>
    </div>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="uk-tab">

            <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true])->label('Назва UK') ?>

            <?= $form->field($model, 'adres_uk')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'coment_uk')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
//                    'height' => '35em'
                ]),
            ])->label('Текст UK');?>
            <div>
                <br>
                <?php if ($model->isNewRecord): ?>
                    <?= $form->field($model, 'image_uk')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                        ],
                    ])->label('Головне зображення UK');?>

                <?php else: ?>

                    <?= $form->field($model, 'image_uk')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                            'initialPreview' => [
                                Yii::$app->request->hostInfo . $model->image_uk
                            ],
                            'initialPreviewAsData' => true,
                        ],
                    ])->label('Головне зображення UK'); ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">

            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true])->label('Name EN') ?>

            <?= $form->field($model, 'adres_en')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'coment_en')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
//                    'height' => '35em'
                ]),
            ])->label('Text EN') ;?>
            <div>
                <br>
                <?php if ($model->isNewRecord): ?>
                    <?= $form->field($model, 'image_en')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                        ],
                    ])->label('Головне зображення EN');?>

                <?php else: ?>

                    <?= $form->field($model, 'image_en')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                            'initialPreview' => [
                                Yii::$app->request->hostInfo . $model->image_en
                            ],
                            'initialPreviewAsData' => true,
                        ],
                    ])->label('Головне зображення EN'); ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">

            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true])->label('Название RU') ?>

            <?= $form->field($model, 'adres_ru')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'coment_ru')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
//                    'height' => '35em'
                ]),
            ])->label('Текст RU');?>
            <div>
                <br>
                <?php if ($model->isNewRecord): ?>
                    <?= $form->field($model, 'image_ru')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                        ],
                    ])->label('Головне зображення RU');?>

                <?php else: ?>

                    <?= $form->field($model, 'image_ru')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                            'initialPreview' => [
                                Yii::$app->request->hostInfo . $model->image_ru
                            ],
                            'initialPreviewAsData' => true,
                        ],
                    ])->label('Головне зображення RU'); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <?php ActiveForm::end(); ?>
    <br>
    <br>
    <br>
    <br>
</div>
