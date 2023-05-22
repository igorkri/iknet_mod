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
                    <img src="/img/phones.png" alt="">
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
            <h3><?=$model->getLabel()['title']?></h3>
            <input name="FormCallback[fio]" type="text" placeholder="<?=$model->getLabel()['fio']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['fio']?>')" oninput="this.setCustomValidity('')" required>
            <input name="FormCallback[email]" type="text" placeholder="<?=$model->getLabel()['email']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['email']?>')" oninput="this.setCustomValidity('')" required>
            <input name="FormCallback[phone]" type="text" placeholder="<?=$model->getLabel()['phone']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['phone']?>')" oninput="this.setCustomValidity('')" required>
            <?=$form->field($model, 'captcha')->widget(ReCaptchaWidget::class);?>
        </div>
        <div class="right">
            <textarea name="FormCallback[message]" id="message" cols="30" rows="9" placeholder="<?=$model->getLabel()['message']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['message']?>')" oninput="this.setCustomValidity('')" required></textarea>
            <input type="submit">
        </div>
<!--    </form>-->
    <?php ActiveForm::end(); ?>
</section>

