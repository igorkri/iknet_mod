<?php

use common\models\Category;
use kartik\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;

/** @var yii\web\View $this */
/** @var common\models\search\CategorySearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Категорії';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container category-index">

    <p>
        <?= Html::a('+ Створити', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            'title_uk',
            'title_en',
            'title_ru',
            'slug',
            //'parent_id',
            //'order',
            //'published',
            //'image',
            //'seo_description_uk',
            //'seo_description_en',
            //'seo_description_ru',
            //'seo_keywords_uk',
            //'seo_keywords_en',
            //'seo_keywords_ru',
            [
                'class' => ActionColumn::class,
                'contentOptions' => ['style' => 'width: 130px;', 'class' => 'text-center'],
                'urlCreator' => function ($action, Category $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                },
                'template' => '{view} {update} {delete}',
            ],
        ],
    ]); ?>


</div>
