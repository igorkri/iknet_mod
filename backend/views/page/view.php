<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Pages $model */

$this->title = $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Pages', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;


\yii\web\YiiAsset::register($this);
?>
<div class="pages-view">


    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
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
            'slug',
            'created_at',
            'updated_at',
            'category_id',
            'menu_id',
            'published',
            'title_uk',
            'text_uk:raw',
            'seo_title_uk',
            'seo_description_uk',
            'seo_keywords_uk',
            'title_en',
            'text_en:raw',
            'seo_title_en',
            'seo_description_en',
            'seo_keywords_en',
            'title_ru',
            'text_ru:raw',
            'seo_title_ru',
            'seo_description_ru',
            'seo_keywords_ru',
            [
                'attribute' => 'image',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image ? Html::img($data->image, ['width' => "220px"]) : "";
                }
            ],
            [
                'attribute' => 'image_og',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image_og ? Html::img($data->image_og, ['width' => "220px"]) : "";
                }
            ],
        ],
    ]) ?>

</div>
