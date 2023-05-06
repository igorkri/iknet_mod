<?php

use common\models\News;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\NewsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'News');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container news-index">

    <p>
        <?= Html::a(Yii::t('app', 'Create News'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            'slug',
            'created_at',
//            'updated_at',
            'category_id',
            //'menu_id',
            //'published',
            //'title_uk',
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
            //'image',
            //'image_og',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, News $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
