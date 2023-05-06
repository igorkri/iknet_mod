<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Pages $model */

$this->title = 'Редагування: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Сторінки', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Редагування';
?>
<div class="container pages-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>


    <?php if(!empty($model->image) || !empty($model->image_og)): ?>
        <hr>
    <div class="row">
        <div class="col-6">
            <label for="">Головне зображення</label>
            <img src="<?=Yii::$app->request->hostInfo. $model->image?>" style="width: 550px" alt="">
        </div>
        <div class="col-6">
            <label for="">SEO зображення</label>
            <img src="<?=Yii::$app->request->hostInfo. $model->image_og?>" style="width: 550px" alt="">
        </div>
    </div>

        <hr>
        <br>
        <br>
    <?php endif; ?>

</div>
