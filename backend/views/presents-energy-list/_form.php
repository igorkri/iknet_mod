<?php

use kartik\form\ActiveForm;
use mihaildev\ckeditor\CKEditor;
use yii\helpers\Html;

use mihaildev\elfinder\ElFinder;

mihaildev\elfinder\Assets::noConflict($this);

/** @var yii\web\View $this */
/** @var common\models\PresentsEnergyList $model */
/** @var yii\widgets\ActiveForm $form */

?>

<div class="container presents-energy-list-form">
    <?php $form = ActiveForm::begin([
        'id' => 'page-form',
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
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="uk-tab">
        <div class="row">
            <div class="col-6">
                    <?= $form->field($model, 'price_uk')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="col-6">
                    <?= $form->field($model, 'sku_uk')->textInput(['maxlength' => true]) ?>
            </div>
        </div>

            <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'description_uk')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
                    'height' => '20em'
                ]),
            ]);?>

        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">
            <div class="row">
                <div class="col-6">
                    <?= $form->field($model, 'price_en')->textInput(['maxlength' => true]) ?>
                </div>
                <div class="col-6">
                    <?= $form->field($model, 'sku_en')->textInput(['maxlength' => true]) ?>
                </div>
            </div>
            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'description_en')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
                    'height' => '20em'
                ]),
            ]);?>

        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">
            <div class="row">
                <div class="col-6">
                    <?= $form->field($model, 'price_ru')->textInput(['maxlength' => true]) ?>
                </div>
                <div class="col-6">
                    <?= $form->field($model, 'sku_ru')->textInput(['maxlength' => true]) ?>
                </div>
            </div>
            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true]) ?>

            <?= $form->field($model, 'description_ru')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
                    'height' => '20em'
                ]),
            ]);?>
        </div>
    </div>

    <?php ActiveForm::end() ?>

</div>
