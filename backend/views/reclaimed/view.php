<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Reclaimed $model */

$this->title = $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Reclaimeds', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="container reclaimed-view">

    <p>
        <?= Html::a(Yii::t('app', 'Створити ще'), ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::a(Yii::t('app', 'Редагувати'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Видалити'), ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Ви впевнені, що хочете видалити цей елемент?'),
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
            'value_uk',
            'value_en',
            'value_ru',
            'qty',
            'order',
            'published',
        ],
    ]) ?>

</div>
