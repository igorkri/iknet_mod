<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\ProjectCategory $model */

$this->title = Yii::t('app', 'Create Project Category');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Project Categories'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="project-category-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
