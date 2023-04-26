<?php

use common\models\PresentsEnergyList;
use kartik\grid\ActionColumn;
use kartik\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;


/** @var yii\web\View $this */
/** @var common\models\search\PresentsEnergyListSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Подарунки енергетикам';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container presents-energy-list-index">

    <p>
        <?= Html::a(' + Подарунки енергетикам', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute' => 'id',
                'label' => 'Зображення',
                'format' => 'raw',
                'filter' => false,
                'value' => function($model){
                    if(!empty($model->img)){
                        return Html::img(Yii::$app->request->hostInfo . '/images/presents-list/' . $model->img->file, ['width' => '60px']);
                    }
                },
                'width' => '50px',
            ],
            'title_uk',
//            'description:ntext',
            'price_uk',
            'sku_uk',
            [
                'class' => ActionColumn::class,
                'template' => '{img} {update} {delete}',
                'buttons' => [
                    'img' => function($url, $model, $key) {
                        return Html::a('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>',
                            ['create-img', 'id' => $key]
                        );
                    }
                ],
                'urlCreator' => function ($action, PresentsEnergyList $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],

        ],
    ]); ?>


</div>
