<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\HomeSection $model */

$this->title = "Секція: " . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Секції', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="container home-section-view">

    <p>
        <?= Html::a('+ Створити ще', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::a('Редагувати', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
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
//            'slug',
//            'order',
            'published:boolean',
            'description_uk:raw',
            'description_en:raw',
            'description_ru:raw',
//            'image',
//            'image_2',
        ],
    ]) ?>

</div>
