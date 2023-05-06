<?php

use common\models\ProjectCategory;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var common\models\search\ProjectCategorySearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = Yii::t('app', 'Project Categories');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container project-category-index">

    <p>
        <?= Html::a(Yii::t('app', 'Create Project Category'), ['create'], ['class' => 'btn btn-success']) ?>
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
            'slug',
            //'parent_id',
            //'order',
            //'published',
            //'image',
            //'seo_description_uk',
            //'seo_description_en',
            //'seo_description_ru',
            //'seo_keywords_uk',
            //'seo_keywords_en',
            //'seo_keywords_ru',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, ProjectCategory $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>


</div>
