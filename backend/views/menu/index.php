<?php

use common\models\Menu;
use kartik\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;


/** @var yii\web\View $this */
/** @var common\models\search\MenuSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Меню';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container menu-index">

    <p>
        <?= Html::a('Добавить меню', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'rowOptions' => function ($model, $key, $index, $grid) {
            return ['data-sortable-id' => $model->id];
        },
        'columns' => [
            [
                'class' => \kotchuprik\sortable\grid\Column::className(),
            ],
//            ['class' => 'yii\grid\SerialColumn'],

//            'id',
//            'order',
            'title_uk',
            'title_en',
            'title_ru',
            'slug',
            //'parent_id',
            //'published',
            [
                'class' => ActionColumn::class,
                'contentOptions' => ['style' => 'width: 130px;', 'class' => 'text-center'],
                'urlCreator' => function ($action, Menu $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 },
                'template' => '{view} {update} {delete}',
            ],
        ],
        'options' => [
            'data' => [
                'sortable-widget' => 1,
                'sortable-url' => Url::to(['sorting']),
            ]
        ],
    ]); ?>


</div>
