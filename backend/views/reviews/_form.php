<?php

use mihaildev\ckeditor\CKEditor;
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use mihaildev\elfinder\ElFinder;

mihaildev\elfinder\Assets::noConflict($this);

/** @var yii\web\View $this */
/** @var common\models\Reviews $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="container reviews-form">

    <?php $form = ActiveForm::begin([
        'id' => 'reviews-form',
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



    <?php // $form->field($model, 'created_at')->textInput() ?>

    <?php // $form->field($model, 'updated_at')->textInput() ?>
    <?php // $form->field($model, 'menu_id')->textInput() ?>





    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="uk-tab">

            <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true])->label('Назва UK') ?>

            <?= $form->field($model, 'description_uk')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
//                    'height' => '35em'
                ]),
            ])->label('Текст UK');?>
            <?= $form->field($model, 'author_uk')->textInput(['maxlength' => true]) ?>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">

            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true])->label('Name EN') ?>

            <?= $form->field($model, 'description_en')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
//                    'height' => '35em'
                ]),
            ])->label('Text EN') ;?>
            <?= $form->field($model, 'author_en')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">

            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true])->label('Название RU') ?>

            <?= $form->field($model, 'description_ru')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
//                    'height' => '35em'
                ]),
            ])->label('Текст RU');?>
            <?= $form->field($model, 'author_ru')->textInput(['maxlength' => true]) ?>
        </div>



    </div>

    <?php ActiveForm::end(); ?>
    <br>
    <br>
    <br>
    <br>
</div>
