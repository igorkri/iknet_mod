<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Category $model */

$this->title = $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Категорії', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="category-view">
    <p>
        <?= Html::a('Редагування', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Видалити', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
//            'id',
            'title_uk',
            'title_en',
            'title_ru',
            'slug',
//            'parent_id',
//            'order',
//            'published',
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image ? Html::img($data->image, ['width' => "220px"]) : "";
                }
            ],
            'seo_description_uk',
            'seo_description_en',
            'seo_description_ru',
            'seo_keywords_uk',
            'seo_keywords_en',
            'seo_keywords_ru',
        ],
    ]) ?>

</div>
