<?php

use kartik\grid\GridView;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\NewsCategory $model */

$this->title = $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Категорії новин'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="container news-category-view">

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
            'title_uk',
            'title_en',
            'title_ru',
            'slug',
            'parent_id',
//            'order',
            'published:boolean',
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function($model){
                    return Html::img($model->image, ['width' => '60px']);
                },
//                'filter' => false,
//                'width' => '10%',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],
//            'image',
            'seo_description_uk',
            'seo_description_en',
            'seo_description_ru',
            'seo_keywords_uk',
            'seo_keywords_en',
            'seo_keywords_ru',
        ],
    ]) ?>

</div>
