<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\ProjectCategory $model */

$this->title = Yii::t('app', 'Додати категорію проєктів');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Категорії проєктів'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container project-category-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
