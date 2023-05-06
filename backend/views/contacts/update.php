<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Contacts $model */

$this->title = Yii::t('app', 'Редагувати: {name}', [
    'name' => $model->id,
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Контакти'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Редагувати');
?>
<div class="contacts-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
