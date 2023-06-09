<?php


use kartik\select2\Select2;
use mihaildev\ckeditor\CKEditor;
use vova07\imperavi\Widget;
use yii\helpers\Html;
use yii\web\JsExpression;
use yii\web\View;
use yii\widgets\ActiveForm;

use mihaildev\elfinder\ElFinder;

mihaildev\elfinder\Assets::noConflict($this);

/** @var yii\web\View $this */
/** @var common\models\HomeTabs $model */
/** @var yii\widgets\ActiveForm $form */


$formatJs = <<< 'JS'
var formatRepo = function (repo) {
    if (repo.loading) {
        return repo.title_uk;
    }
   
        let markup = '<div class="row">' + 
                '<div class="col-sm-10">' + repo.title_uk + '</div>' +
            '</div>';   
        return '<div style="overflow:visible;">' + markup + '</div>';
    
};
var formatRepoSelection = function (repo) {
    if(repo.id === ''){
       return repo.title_uk;
   } else {
        if(repo.text === ''){
            return repo.title_uk;
            // console.log(repo);
        }
        $.ajax({
            url: "/admin/home-tabs/search-res-name",
            type: 'get',
            data: {
              'slug': repo.text,
            },
            success: function(data) {
              $('#slug').append(":  " + data);
            },
        });
        return repo.text;
   }
}


JS;

// Register the formatting script
$this->registerJs($formatJs, View::POS_HEAD);

// script to parse the results into the format expected by Select2
$resultsJs = <<< JS
function pagination (data, params) {
    params.page = params.page || 1;
    return {
        results: data.results,
        pagination: {
            more: (params.page * 1) < data.total_count
        }
    };
}
JS;

?>

<div class="container home-tabs-form">
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
        <div class="col-12">
            <?php echo $form->field($model, 'slug')->widget(Select2::classname(), [
//                 'theme' => Select2::THEME_DEFAULT,
                'language' => 'uk',
                'options' => [
                    'placeholder' => "Сторінка",
                    'class' => 'form-control  form-control-select2',
                    'id' => 'checkout-country',
                ],
                'pluginLoading' => true,
                'pluginOptions' => [
                    'width' => '100%',
                    'allowClear' => true,
                    'minimumInputLength' => 3,
                    'ajax' => [
                        'url' => '/admin/home-tabs/searh-page',
                        'dataType' => 'json',
                        'delay' => 550,
                        'data' => new JsExpression('function(params) { return { q:params.term, page: params.page}; }'),
                        'processResults' => new JsExpression($resultsJs),
                        'cache' => true
                    ],
                    'escapeMarkup' => new JsExpression('function (markup) { return markup; }'),
                    'templateResult' => new JsExpression('formatRepo'),
                    'templateSelection' => new JsExpression('formatRepoSelection'),
                ],
            ])->label('Сторінка', [
                            'id' => 'slug'
            ])?>
        </div>
<!--        <div class="col-6">-->
            <?php // $form->field($model, 'order')->textInput(['maxlength' => true]) ?>
<!--        </div>-->
    </div>
    <div class="row">
        <div class="col-6">
            <?= $form->field($model, 'section_id')->dropDownList(\yii\helpers\ArrayHelper::map(
                    \common\models\HomeSection::find()->asArray()->all(), 'id', 'title_uk'
            ),['prompt'=>'Виберіть...']
            )->label('Секція для відображення')?>
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
            <?php // $form->field($model, 'description_en')->textarea(['maxlength' => true])->label('Text EN') ?>
            <?php
//            echo $form->field($model, 'description_en')->widget(CKEditor::class, [
//                'containerOptions' => [
//                    'id' => 'desc-en',
//                ],
//                'editorOptions' => [
//                    ElFinder::ckeditorOptions('elfinder',[
//                    'language' => 'uk',
//                    //                    'width' => '500',
//                    'height' => '15em'
//                ]),
//            ]])->label('Text EN')
            ;?>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">
            <input name="translate" id="translate-ru" data-lang="ru" value="Перевести з UK на RU" class="btn btn-info pull-right" style="margin-bottom: 10px">
            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true])->label('Название RU') ?>
            <?php // $form->field($model, 'description_ru')->textarea(['maxlength' => true])->label('Text RU') ?>
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