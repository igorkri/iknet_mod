<?php

use common\models\Category;
use common\models\Menu;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Menu $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="container menu-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="row">
        <div class="col-5">
            <?php echo $form->field($model, 'parent_id')->dropDownList(ArrayHelper::map(Menu::find()
                ->with('parent')
                ->asArray()->all(),
                'id', 'title_uk', 'parent.title_uk'),
                ['prompt'=>'Не обовʼязково...']
            )?>
        </div>
        <div class="col-2">
            <?= $form->field($model, 'published')->dropDownList(
                [
                    1 => 'Так',
                    0 => 'Ні'
                ]
            ) ?>
        </div>
        <div class="col-5">
            <?= $form->field($model, 'slug')->textInput(['maxlength' => true, 'readonly'=> true]) ?>
        </div>
    </div>

    <?= $form->field($model, 'title_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true]) ?>



    <?php //$form->field($model, 'order')->textInput() ?>

    <hr>
    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
