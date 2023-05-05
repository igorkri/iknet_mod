<?php

use common\models\PresentsEnergy;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\PresentsEnergySearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Presents Energies';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container presents-energy-index">
    <?php if ($present === null){ ?>
    <p>
        <?= Html::a('Create Presents Energy', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?php } ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            'title',
            'description:ntext',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, PresentsEnergy $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
