<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\FormCallback $model */

$this->title = 'Create Form Callback';
$this->params['breadcrumbs'][] = ['label' => 'Form Callbacks', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="form-callback-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
