<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\search\PagesSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="pages-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'slug') ?>

    <?= $form->field($model, 'created_at') ?>

    <?= $form->field($model, 'updated_at') ?>

    <?= $form->field($model, 'category_id') ?>

    <?php // echo $form->field($model, 'menu_id') ?>

    <?php // echo $form->field($model, 'published') ?>

    <?php // echo $form->field($model, 'title_uk') ?>

    <?php // echo $form->field($model, 'text_uk') ?>

    <?php // echo $form->field($model, 'seo_title_uk') ?>

    <?php // echo $form->field($model, 'seo_description_uk') ?>

    <?php // echo $form->field($model, 'seo_keywords_uk') ?>

    <?php // echo $form->field($model, 'title_en') ?>

    <?php // echo $form->field($model, 'text_en') ?>

    <?php // echo $form->field($model, 'seo_title_en') ?>

    <?php // echo $form->field($model, 'seo_description_en') ?>

    <?php // echo $form->field($model, 'seo_keywords_en') ?>

    <?php // echo $form->field($model, 'title_ru') ?>

    <?php // echo $form->field($model, 'text_ru') ?>

    <?php // echo $form->field($model, 'seo_title_ru') ?>

    <?php // echo $form->field($model, 'seo_description_ru') ?>

    <?php // echo $form->field($model, 'seo_keywords_ru') ?>

    <?php // echo $form->field($model, 'image') ?>

    <?php // echo $form->field($model, 'image_og') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
