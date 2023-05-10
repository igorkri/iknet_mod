<?php

use manchenkov\yii\recaptcha\ReCaptchaWidget;
use yii\widgets\ActiveForm;

?>
<!----- contacts ----->
<section class="contacts">
    <div class="block">
        <h2><?= $contact->getTitle($contact->id) ?></h2>
        <div class="cont">
            <div class="text">
                <address>
                    <img src="/img/address.svg" alt="">
                    <div>
                        <?= $contact->getAdress($contact->id) ?>
                    </div>
                </address>
                <address>
                    <img src="/img/phones.svg" alt="">
                    <div>
                        <a href="tel:<?=str_replace([' ', '(', ')', '-'], '', $contact->tel1)?>"><?= $contact->tel1 ?></a>
                        <a href="tel:<?=str_replace([' ', '(', ')', '-'], '', $contact->tel2)?>"><?= $contact->tel2 ?></a>
                    </div>
                </address>
                <address>
                    <img src="/img/contacts.svg" alt="">
                    <div>
                        <a href="mailto:<?= $contact->email ?>"><?= $contact->email ?></a>
                        <a href="<?= $contact->site ?>"><?= $contact->site ?></a>
                    </div>
                </address>
                <p><?= $contact->getComent($contact->id) ?></p>
            </div>
            <div class="img">
                <img src="<?= $contact->getImage($contact->id) ?>" alt="">
            </div>
        </div>
    </div>
</section>

<!----- contact_us ----->
<section class="contact_us">
    <?php $form = ActiveForm::begin(); ?>
<!--    <form action="">-->
        <div class="left">
            <h3>Зв’язатись з нами</h3>
            <input name="FormCallback[fio]" type="text" placeholder="ПІБ">
            <input name="FormCallback[email]" type="text" placeholder="Пошта">
            <input name="FormCallback[phone]" type="text" placeholder="Телефон">
            <?=\xstreamka\recaptcha\ReCaptcha::widget(); // added hidden input ?>
            <?php // \xstreamka\recaptcha\ReCaptcha::validate(); ?>
        </div>
        <div class="right">
            <textarea name="" id="message" cols="30" rows="9" placeholder="Ваше повідомлення"></textarea>
            <input type="submit">
        </div>
<!--    </form>-->
    <?php ActiveForm::end(); ?>
</section>

