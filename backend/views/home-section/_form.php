<?php

use vova07\imperavi\Widget;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\HomeSection $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="container home-section-form">

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
    <br>
    <br>

    <div class="row">
        <div class="col-6">
        <?php //$form->field($model, 'order')->textInput(['maxlength' => true]) ?>
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
            <?php
            echo $form->field($model, 'description_uk')->widget(Widget::className(), [
                'defaultSettings' => [
                    'class' => 'desc-uk',
                ],
                'settings' => [
                    'lang' => 'uk',
                    'minHeight' => 200,
                    'plugins' => [
                        'fullscreen',
                    ],
                ],
            ]);
            ?>

        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">
            <input name="translate" id="translate-en" data-lang="en" value="Перевести з UK на EN" class="btn btn-info pull-right" style="margin-bottom: 10px">
            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true])->label('Name EN') ?>
            <?php
            echo $form->field($model, 'description_en')->widget(Widget::className(), [
                'settings' => [
                    'lang' => 'uk',
                    'class' => 'desc-en',
                    'minHeight' => 200,
                    'plugins' => [
                        'fullscreen',
                    ],
                ],
            ]);
            ?>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">
            <input name="translate" id="translate-ru" data-lang="ru" value="Перевести з UK на RU" class="btn btn-info pull-right" style="margin-bottom: 10px">
            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true])->label('Название RU') ?>
            <?php
            echo $form->field($model, 'description_ru')->widget(Widget::className(), [
                'settings' => [
                    'lang' => 'uk',
                    'minHeight' => 200,
                    'plugins' => [
                        'fullscreen',
                    ],
                ],
            ]);
            ?>
        </div>
        <div class="row">

        </div>
    </div>

    <?php // $form->field($model, 'image')->textInput(['maxlength' => true]) ?>

    <?php // $form->field($model, 'image_2')->textInput(['maxlength' => true]) ?>

    <?php ActiveForm::end(); ?>



</div>
<?php
$Js = <<< JS
$( document ).ready(function() {
    $('#translate-en').on('click', function () {
        var titleUk = $('#hometabs-title_uk').val();
        var textUk = $('#hometabs-description_uk').val();
        $.ajax({
            url: '/admin/home-tabs/translate',
            data: {
                lang: 'en',
                title: titleUk,
                text: textUk,
            },
            success: function(data){
                if(data.lang === 'en'){
                    $('#hometabs-title_en').val(data.title);
                    $("#hometabs-description_en").redactor('code.set', data.text);
                   
                }
                if(data.lang === 'ru'){
                    $('#hometabs-title_ru').val(data.title);
                    $("#hometabs-description_ru").redactor('code.set', data.text);
                }
        },
        error: function(data){
            console.log(data)
            // $.pjax.reload({ container: '#all-page' });
        }
        });
    });
    
    $('#translate-ru').on('click', function () {
        var titleUk = $('#hometabs-title_uk').val();
        var textUk = $('#hometabs-description_uk').val();
        $.ajax({
            url: '/admin/home-tabs/translate',
            data: {
                lang: 'ru',
                title: titleUk,
                text: textUk,
            },
            success: function(data){
                if(data.lang === 'en'){
                    $('#hometabs-title_en').val(data.title);
                    $("#hometabs-description_en").redactor('code.set', data.text);
                   
                }
                if(data.lang === 'ru'){
                    $('#hometabs-title_ru').val(data.title);
                    $("#hometabs-description_ru").redactor('code.set', data.text);
                }
        },
        error: function(data){
            console.log(data)
            // $.pjax.reload({ container: '#all-page' });
        }
        });
    });
});

JS;

$this->registerJs($Js);
?>

<?php
$Js = <<< JS
$( document ).ready(function() {
    $('#translate-en').on('click', function () {
        var titleUk = $('#homesection-title_uk').val();
        var textUk = $('#homesection-description_uk').val();
        $.ajax({
            url: '/admin/home-section/translate',
            method: 'POST',
            data: {
                lang: 'en',
                title: titleUk,
                text: textUk,
            },
            success: function(data){
                if(data.lang === 'en'){
                    $('#homesection-title_en').val(data.title);
                    $("#homesection-description_en").redactor('code.set', data.text);
                   
                }
                if(data.lang === 'ru'){
                    $('#homesection-title_ru').val(data.title);
                    $("#homesection-description_ru").redactor('code.set', data.text);
                }
        },
        error: function(data){
            console.log(data)
            // $.pjax.reload({ container: '#all-page' });
        }
        });
    });
    
    $('#translate-ru').on('click', function () {
        var titleUk = $('#homesection-title_uk').val();
        var textUk = $('#homesection-description_uk').val();
        $.ajax({
            url: '/admin/home-section/translate',
            method: 'POST',
            data: {
                lang: 'ru',
                title: titleUk,
                text: textUk,
            },
            success: function(data){
                if(data.lang === 'en'){
                    $('#homesection-title_en').val(data.title);
                    $("#homesection-description_en").redactor('code.set', data.text);
                   
                }
                if(data.lang === 'ru'){
                    $('#homesection-title_ru').val(data.title);
                    $("#homesection-description_ru").redactor('code.set', data.text);
                    console.log(data);
                }
        },
        error: function(data){
            console.log(data)
            // $.pjax.reload({ container: '#all-page' });
        }
        });
    });
});

JS;

$this->registerJs($Js);
?>