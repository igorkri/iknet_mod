<?php

/** @var yii\web\View $this */

use frontend\widgets\Algorithm;
use frontend\widgets\ContactUs;
use frontend\widgets\MainSlider;
use frontend\widgets\News;
use frontend\widgets\OurClients;
use frontend\widgets\Possibilities;
use frontend\widgets\Projects;
use frontend\widgets\Reclame;

$this->title = 'IKNET';
?>

<!----- Мейн слайдер ----->

<?php echo MainSlider::widget() ?>

<!----- reclame ----->

<?php echo Reclame::widget() ?>

<!----- algorithm ----->

<?php echo Algorithm::widget() ?>

<!----- possibilities ----->

<?php echo Possibilities::widget() ?>

<!----- projects ----->

<?php echo Projects::widget() ?>

<!----- news ----->

<?php echo News::widget() ?>

<!----- our_clients ----->

<?php echo OurClients::widget() ?>

<!----- contact_us ----->

<?php echo ContactUs::widget() ?>
