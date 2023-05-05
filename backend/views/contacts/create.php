<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Contacts $model */

$this->title = Yii::t('app', 'Create Contacts');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Contacts'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="contacts-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
