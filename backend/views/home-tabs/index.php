<?php

use common\models\HomeTabs;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\widgets\Pjax;
/** @var yii\web\View $this */
/** @var common\models\search\HomeTabsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Таби головної сторінки';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container home-tabs-index">

    <p>
        <?= Html::a('+ Створити', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'title_uk',
            'title_en',
            'title_ru',
            'slug',
            //'section_id',
            //'order',
            //'published',
            //'description_uk:ntext',
            //'description_en:ntext',
            //'description_ru:ntext',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, HomeTabs $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>

    <?php Pjax::end(); ?>

</div>
