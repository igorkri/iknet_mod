<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var common\models\Contacts $model */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Контакти'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="container contacts-view">

    <p>
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
            'title_uk',
            'title_en',
            'title_ru',
            'adres_uk',
            'adres_en',
            'adres_ru',
            'coment_uk:raw',
            'coment_en:raw',
            'coment_ru:raw',
            'email:email',
            'site',
            'tel1',
            'tel2',
            [
                'attribute' => 'image_uk',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image_uk ? Html::img($data->image_uk, ['width' => "220px"]) : "";
                }
            ],[
                'attribute' => 'image_en',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image_en ? Html::img($data->image_en, ['width' => "220px"]) : "";
                }
            ],[
                'attribute' => 'image_ru',
                'format' => 'raw',
                'value' => function($data){
                    return $data->image_ru ? Html::img($data->image_ru, ['width' => "220px"]) : "";
                }
            ],
        ],
    ]) ?>

</div>
