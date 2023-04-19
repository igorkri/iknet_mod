<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Menu $model */

$this->title = 'Редактирование МЕНЮ: ' . $model->title_uk;
$this->params['breadcrumbs'][] = ['label' => 'Menus', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="menu-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
