<?php


use common\models\ClientsBrand;
use kartik\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;


/** @var yii\web\View $this */
/** @var common\models\search\ClientsBrandSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Клієнти Logo';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container clients-brand-index">

    <p>
        <?= Html::a('+ Додати', ['create', 'lang' => 'uk'], ['class' => 'btn btn-success']) ?>
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
                'class' => \kotchuprik\sortable\grid\Column::class,
            ],
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            [
                "attribute" => 'file',
                'format' => 'raw',
                'value' => function($model){
                    return $model->file ? Html::img(Yii::$app->request->hostInfo . "/images/client-brand/" . $model->file, ['width' => '100px']) : '';
                }
            ],
            'name',
//            'slug',
            [
                "attribute" => 'published',
                'format' => 'raw',
                'value' => function($model){
                    return $model->published == 1 ? '<span class="badge badge-success">Так</span>' : '<span class="badge badge-danger">Ні</span>';
                }
            ],
            [
                'class' => ActionColumn::class,
                'template' => '{update} {delete}',
                'urlCreator' => function ($action, ClientsBrand $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
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
