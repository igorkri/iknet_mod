<?php

use common\models\Category;
use common\models\Projects;
use kartik\grid\GridView;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;


/** @var yii\web\View $this */
/** @var common\models\search\ProjectsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Проєкти');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container projects-index">

    <p>
        <?= Html::a(Yii::t('app', '+ Створити'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
//            'id',
//            'slug',
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function($model){
                    return Html::img($model->image, ['width' => '60px']);
                },
                'filter' => false,
                'width' => '10%',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],
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
            'title_uk',
//            'updated_at',
//            'category.title_uk',
            [
                'attribute' => 'category_id',
                'format' => 'raw',
                'value' => 'category.title_uk',
                'filter' => ArrayHelper::map(\common\models\ProjectCategory::find()->with(['parent', 'parents'])
                    ->asArray()->all(),
                    'id', 'title_uk', 'parent.title_uk'),
                'width' => '15%',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],[
                'attribute' => 'published',
                'format' => 'raw',
                'value' => function($model){
                    return $model->published ? 'Так' : 'Ні';
                },
                'filter' => [
                        1 => 'Так',
                        0 => 'Ні',
                ],
                'width' => '15%',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],
            //'menu_id',
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

            //'image_og',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Projects $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
