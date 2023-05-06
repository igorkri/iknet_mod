<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\News $model */

$this->title = Yii::t('app', '+ Створити');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Новини'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container news-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
