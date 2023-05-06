<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Reviews $model */

$this->title = Yii::t('app', 'Створити відгук');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Відгук'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="reviews-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
