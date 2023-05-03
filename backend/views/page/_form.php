<?php

use common\models\Category;
use kartik\file\FileInput;
use mihaildev\ckeditor\CKEditor;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

use mihaildev\elfinder\ElFinder;

mihaildev\elfinder\Assets::noConflict($this);

/** @var yii\web\View $this */
/** @var common\models\Pages $model */
/** @var yii\widgets\ActiveForm $form */

?>

<div class="container pages-form">

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

    <?= $form->field($model, 'slug')->hiddenInput(['maxlength' => true])->label(false) ?>

    <?php // $form->field($model, 'created_at')->textInput() ?>

    <?php // $form->field($model, 'updated_at')->textInput() ?>
    <?php // $form->field($model, 'menu_id')->textInput() ?>

    <div class="row">
        <div class="col-6">
            <?= $form->field($model, 'category_id')->dropDownList(ArrayHelper::map(Category::find()->with(['parent', 'parents'])
                ->asArray()->all(),
                'id', 'title_uk', 'parent.title_uk'),
                ['prompt'=>'Виберіть...']
            )->label('Категорія')?>
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



    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="uk-tab">

            <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true])->label('Назва UK') ?>

            <?= $form->field($model, 'text_uk')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
                    'height' => '35em'
                ]),
            ])->label('Текст UK');?>

            <?= $form->field($model, 'seo_title_uk')->textInput(['maxlength' => true])->label('SEO Назва UK') ?>

            <?= $form->field($model, 'seo_description_uk')->textInput(['maxlength' => true])->label('SEO Опис UK') ?>

            <?= $form->field($model, 'seo_keywords_uk')->textInput(['maxlength' => true])->label('SEO Ключеві слова UK') ?>

        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">

            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true])->label('Name EN') ?>

            <?= $form->field($model, 'text_en')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
                    'height' => '35em'
                ]),
            ])->label('Text EN') ;?>

            <?= $form->field($model, 'seo_title_en')->textInput(['maxlength' => true])->label('SEO Name EN') ?>

            <?= $form->field($model, 'seo_description_en')->textInput(['maxlength' => true])->label('SEO Description EN') ?>

            <?= $form->field($model, 'seo_keywords_en')->textInput(['maxlength' => true])->label('SEO Keywords EN') ?>

        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">

            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true])->label('Название RU') ?>

            <?= $form->field($model, 'text_ru')->widget(CKEditor::class, [
                    'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                        'language' => 'uk',
                        //                    'width' => '500',
                        'height' => '35em'
                    ]),
                ])->label('Текст RU');?>
            <?= $form->field($model, 'seo_title_ru')->textInput(['maxlength' => true])->label('SEO Название RU') ?>

            <?= $form->field($model, 'seo_description_ru')->textInput(['maxlength' => true])->label('SEO Описание RU') ?>

            <?= $form->field($model, 'seo_keywords_ru')->textInput(['maxlength' => true])->label('SEO Ключевые слова RU') ?>

        </div>
        <div class="row">
            <div class="col-6">
                <br>
                <?php if ($model->isNewRecord): ?>
                <?= $form->field($model, 'image')->widget(FileInput::class, [
                    'language' => 'uk',
                    'options' => ['accept' => 'image/*'],
                    'pluginOptions' => [
                        'maxFileCount' => 1,
                        'showRemove' => false,
                        'showUpload' => false,
                    ],
                ])->label('Головне зображення');?>

                <?php else: ?>

                    <?= $form->field($model, 'image')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                            'initialPreview' => [
                                Yii::$app->request->hostInfo . $model->image
                            ],
                            'initialPreviewAsData' => true,
                        ],
                    ])->label('Головне зображення'); ?>

                <?php endif; ?>
            </div>

            <div class="col-6">
                <?php if ($model->isNewRecord): ?>
                <?= $form->field($model, 'image_og')->widget(FileInput::class, [
                    'language' => 'uk',
                    'options' => ['accept' => 'image/*'],
                    'pluginOptions' => [
                        'maxFileCount' => 1,
                        'showRemove' => false,
                        'showUpload' => false,
                    ],
                ])->label('Зображення для SEO (Якщо залишити пустим буде використовуваться головне зображення)');?>

                <?php else: ?>

                    <?= $form->field($model, 'image_og')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                            'initialPreview' => [
                                Yii::$app->request->hostInfo . $model->image_og
                            ],
                            'initialPreviewAsData' => true,
                        ],
                    ])->label('Зображення для SEO (Якщо залишити пустим буде використовуваться головне зображення)'); ?>
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
