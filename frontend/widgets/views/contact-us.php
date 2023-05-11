<?php

//use manchenkov\yii\recaptcha\ReCaptchaWidget;
use yii\widgets\ActiveForm;

?>

<section class="contact_us">
    <?php $form = ActiveForm::begin(); ?>
    <!--    <form action="">-->
    <div class="left">
        <h3><?=$model->getLabel()['title']?></h3>
        <input name="FormCallback[fio]" type="text" placeholder="<?=$model->getLabel()['fio']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['fio']?>')" oninput="this.setCustomValidity('')" required>
        <input name="FormCallback[email]" type="text" placeholder="<?=$model->getLabel()['email']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['email']?>')" oninput="this.setCustomValidity('')" required>
        <input name="FormCallback[phone]" type="text" placeholder="<?=$model->getLabel()['phone']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['phone']?>')" oninput="this.setCustomValidity('')" required>
        <?php //\xstreamka\recaptcha\ReCaptcha::widget(); // added hidden input ?>
        <?php // \xstreamka\recaptcha\ReCaptcha::validate(); ?>
    </div>
    <div class="right">
        <textarea name="FormCallback[message]" id="message" cols="30" rows="9" placeholder="<?=$model->getLabel()['message']?>" ></textarea>
        <input type="submit">
    </div>
    <!--    </form>-->
    <?php ActiveForm::end(); ?>
</section>