<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\ClientsBrand $model */

$this->title = 'Додавання logo клієнта';
$this->params['breadcrumbs'][] = ['label' => 'Всі', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class= "container clients-brand-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
