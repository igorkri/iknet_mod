<?php

use common\models\Reclaimed;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\ReclaimedSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Reclaimeds';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container reclaimed-index">

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
            'value_uk',
            //'value_en',
            //'value_ru',
            //'qty',
            //'order',
            //'published',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Reclaimed $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
