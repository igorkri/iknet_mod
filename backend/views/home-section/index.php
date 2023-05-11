<?php

use common\models\HomeSection;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;
/** @var yii\web\View $this */
/** @var common\models\search\HomeSectionSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Секції';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container home-section-index">

<!--    <p>-->
<!--        --><?php //= Html::a('+ Створення секції', ['create'], ['class' => 'btn btn-success']) ?>
<!--    </p>-->

    <?php Pjax::begin(); ?>
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
//            'slug',
            //'order',
            'published:boolean',
            //'description_uk:ntext',
            //'description_en:ntext',
            //'description_ru:ntext',
            //'image',
            //'image_2',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, HomeSection $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>

    <?php Pjax::end(); ?>

</div>
