<?php


use kartik\select2\Select2;
use mihaildev\ckeditor\CKEditor;
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
            <?= $form->field($model, 'section_id')->dropDownList([
                    1 => 'Інжиніринг в енергетиці',
                    2 => 'Приєднання об’єктів',
                    3 => 'Напрямки бізнесу'
            ],['prompt'=>'Виберіть...']
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

            <?= $form->field($model, 'description_uk')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
//                    'width' => '500',
                    'height' => '15em'
                ]),
            ])->label('Текст UK');?>

        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="en-tab">

            <?= $form->field($model, 'title_en')->textInput(['maxlength' => true])->label('Name EN') ?>

            <?= $form->field($model, 'description_en')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
                    'height' => '15em'
                ]),
            ])->label('Text EN') ;?>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="ru-tab">

            <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true])->label('Название RU') ?>

            <?= $form->field($model, 'description_ru')->widget(CKEditor::class, [
                'editorOptions' => ElFinder::ckeditorOptions('elfinder',[
                    'language' => 'uk',
                    //                    'width' => '500',
                    'height' => '15em'
                ]),
            ])->label('Текст RU');?>
        </div>
        <div class="row">

        </div>
    </div>

    <?php ActiveForm::end(); ?>
</div>
