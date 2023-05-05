<?php

use common\models\Vacancies;
use kartik\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;

/** @var yii\web\View $this */
/** @var common\models\search\VcanciesSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Вакансии';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container vacancies-index">
    <p>
        <?= Html::a(' + Добавить', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
//            'page_id',
            'title',
//            'message:ntext',
            [
                'class' => ActionColumn::class,
                'urlCreator' => function ($action, Vacancies $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
