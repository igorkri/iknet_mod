<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\HomeTabs $model */

$this->title = 'Створення табу';
$this->params['breadcrumbs'][] = ['label' => 'Список', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="container home-tabs-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
