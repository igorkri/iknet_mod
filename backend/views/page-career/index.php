<?php

use common\models\PageCareer;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\PageCareerSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Сторінка кар\'єра ';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container page-career-index">

    <?php if ($career === null){ ?>
    <p>
        <?= Html::a('+ Додати', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?php } ?>


    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            'text_header:raw',
            'text_footer:raw',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, PageCareer $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
