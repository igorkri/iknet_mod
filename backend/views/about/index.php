<?php

use common\models\About;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\AboutSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Abouts');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container">

<?php if ($about === null){ ?>
    <p>
        <?= Html::a(Yii::t('app', 'Create About'), ['create'], ['class' => 'btn btn-success']) ?>
    </p>
<?php } ?>
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
//            'description_uk:raw',
//            'description_en:raw',
//            'description_ru:raw',
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image ? Html::img($data->image, ['width' => "220px"]) : "";
                }
            ],
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, About $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
