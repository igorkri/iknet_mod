<?php

use common\models\Category;
use common\models\Pages;
use kartik\grid\GridView;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;


/** @var yii\web\View $this */
/** @var common\models\search\PagesSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Страницы';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container pages-index">

    <p>
        <?= Html::a(' + Создать страницу', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
//            'slug',
//            'created_at',
//            'updated_at',
            [
                'attribute' => 'published',
                'format' => 'raw',
                'value' => function($model){
                    return $model->published == 1 ? '<span class="badge badge-success">Так</span>' : '<span class="badge badge-danger">Ні</span>';
                },
                'width' => '50px',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],
            [
                'attribute' => 'category_id',
                'format' => 'raw',
                'value' => 'category.title_uk',
                'filter' => ArrayHelper::map(Category::find()->with(['parent', 'parents'])
                    ->asArray()->all(),
                    'id', 'title_uk', 'parent.title_uk'),
//                'value' => function($model){
//                    return $model->published == 1 ? '<span class="badge badge-success">Так</span>' : '<span class="badge badge-danger">Ні</span>';

//                },
                'width' => '30%',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],

            //'menu_id',


            'title_uk',
            //'text_uk:ntext',
            //'seo_title_uk',
            //'seo_description_uk',
            //'seo_keywords_uk',
            //'title_en',
            //'text_en:ntext',
            //'seo_title_en',
            //'seo_description_en',
            //'seo_keywords_en',
            //'title_ru',
            //'text_ru:ntext',
            //'seo_title_ru',
            //'seo_description_ru',
            //'seo_keywords_ru',
//            'image',
            //'image_og',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Pages $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
