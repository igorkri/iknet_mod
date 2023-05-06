<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\NewsCategory $model */

$this->title = Yii::t('app', 'Create News Category');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'News Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container news-category-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
