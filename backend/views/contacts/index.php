<?php

use common\models\Contacts;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\ContactsSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Contacts');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container contacts-index">

    <p>
        <?= Html::a(Yii::t('app', 'Create Contacts'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

//            'id',
            'title_uk',
//            'title_en',
//            'title_ru',
            'adres_uk',
            //'adres_en',
            //'adres_ru',
            'coment_uk:raw',
            //'coment_en:ntext',
            //'coment_ru:ntext',
            'email:email',
            //'site',
            'tel1',
            //'tel2',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Contacts $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
