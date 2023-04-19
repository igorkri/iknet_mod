<?php

use common\models\Category;
use kartik\file\FileInput;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Category $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="category-form">

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col d-flex justify-content-end">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="uk-tab" data-toggle="tab" href="#home" role="tab"
                       aria-controls="home" aria-selected="true">UK</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="en-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                       aria-selected="false">EN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="ru-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                       aria-selected="false">RU</a>
                </li>
            </ul>
        </div>
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

    <div class="row">
        <div class="col-4">
            <?= $form->field($model, 'parent_id')->dropDownList(ArrayHelper::map(Category::find()->with(['parent', 'parents'])
                ->asArray()->all(),
                'id', 'title_uk', 'parent.title_uk'),
                ['prompt' => 'Виберіть...']
            )->label('Головна категорія') ?>
        </div>
        <div class="col-4">
            <?= $form->field($model, 'published')->dropDownList(
                [
                    1 => 'Так',
                    0 => 'Ні'
                ]
            )->label('Опубліковано (Так | Ні)') ?>
        </div>
        <div class="col-4">
            <?= $form->field($model, 'slug')->textInput(['maxlength' => true, 'readonly'=> true]) ?>
        </div>

    </div>

    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="uk-tab">

            <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true]) ?>
            <?= $form->field($model, 'seo_description_uk')->textInput(['maxlength' => true]) ?>
            <?= $form->field($model, 'seo_keywords_uk')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">

            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true]) ?>
            <?= $form->field($model, 'seo_description_en')->textInput(['maxlength' => true]) ?>
            <?= $form->field($model, 'seo_keywords_en')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">

            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true]) ?>
            <?= $form->field($model, 'seo_description_ru')->textInput(['maxlength' => true]) ?>
            <?= $form->field($model, 'seo_keywords_ru')->textInput(['maxlength' => true]) ?>

        </div>
        <div class="row">
            <div class="col-12">
                <br>
                <?php if($model->isNewRecord): ?>
                    <?= $form->field($model, 'image')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                        ],
                    ]);?>
                <?php else: ?>
                    <?= $form->field($model, 'image')->widget(FileInput::class, [
                        'language' => 'uk',
                        'options' => ['accept' => 'image/*'],
                        'pluginOptions' => [
                            'maxFileCount' => 1,
                            'showRemove' => false,
                            'showUpload' => false,
                            'initialPreview'=>[
                                Yii::$app->request->hostInfo . $model->image
                            ],
                            'initialPreviewAsData'=>true,
                        ],
                    ]);?>
                <?php endif; ?>
            </div>

        </div>
    </div>

    <?php ActiveForm::end(); ?>

</div>
