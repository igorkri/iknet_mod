<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\NewsCategory $model */

$this->title = Yii::t('app', '+ Створити');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Категорії новин'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container news-category-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
