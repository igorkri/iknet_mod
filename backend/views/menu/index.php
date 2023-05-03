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
            [
                'attribute' => 'parent_id',
                'label' => 'Головна категорія',
                'format' => 'raw',
                'value' => 'parent.title_uk',
                'filter' => false,
                'width' => '50px',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],

            'title_uk',
            'title_en',
            'title_ru',
            'slug',
            [
                'attribute' => 'published',
                'format' => 'raw',
                'value' => function($model){
                    return $model->published == 1 ? '<span class="badge badge-success">Так</span>' : '<span class="badge badge-danger">Ні</span>';
                },
                'filter' => [
                        1 => "Так",
                        0 => "Ні",
                ],
                'width' => '50px',
                'vAlign' => GridView::ALIGN_MIDDLE,
                'hAlign' => GridView::ALIGN_CENTER,

            ],
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
