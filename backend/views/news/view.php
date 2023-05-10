<?php

use kartik\grid\GridView;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\News $model */

$this->title = $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Новини'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="container news-view">

    <p>
        <?= Html::a(Yii::t('app', 'Редагувати'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Видалити'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Ви впевнені, що хочете видалити цей елемент?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
//            'id',
            'slug',
            [
                'attribute' => 'created_at',
                'filter' => false,
                'value' => function($model){
                    return Yii::$app->formatter->asDate($model->created_at, 'long');
                },
                'width' => '5%',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],
//            'created_at',
//            'updated_at',
//            'category_id',
//            'menu_id',
//            'published',
            'title_uk',
            'text_uk:raw',
            'seo_title_uk',
            'seo_description_uk',
            'seo_keywords_uk',
            'title_en',
            'text_en:raw',
            'seo_title_en',
            'seo_description_en',
            'seo_keywords_en',
            'title_ru',
            'text_ru:raw',
            'seo_title_ru',
            'seo_description_ru',
            'seo_keywords_ru',
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image ? Html::img($data->image, ['width' => "220px"]) : "";
                }
            ],
            [
                'attribute' => 'image_og',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image_og ? Html::img($data->image_og, ['width' => "220px"]) : "";
                }
            ],
//            'image',
//            'image_og',
        ],
    ]) ?>

</div>
