<?php

use yii\widgets\ActiveForm;

$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
    $price =  'Цена:';
    $cod =  'Код:';
    $many =  'руб';
}elseif($lang == 'en'){
    $price =  'Price:';
    $cod =  'Code:';
    $many =  'USD';
}else{
    $price = 'Ціна:';
    $cod =  'Код:';
    $many =  ' грн';
}

?>

<!----- gifts ----->
<section class="gifts" id="gifts">
    <div class="block">
        <h2><?= $item->getTitle($item->id) ?></h2>
        <p><?= $item->getDescription($item->id) ?>
        </p>
        <?php $i = 1; foreach ($presents as $present): ?>
        <div class="item" data-filter="gift_<?=$i?>" data-id="<?=$present->id?>">
            <div class="img">
                <?php if(isset($present->img)): ?>
                <img src="/images/presents-list/<?=$present->img->file?>" alt="">
                <?php endif; ?>
            </div>
            <div class="info">
                <div class="title">
                    <h4><?= $present->getTitle($present->id) ?></h4>
                    <h5><?= $cod ?><span><?= $present->getCod($present->id) ?></span></h5>
                </div>
                <div class="disc">
                    <p><?= $present->getDescription($present->id) ?></p>
                    <h5><?= $price ?><span><?= $present->getPrice($present->id) ?> <?= $many ?></span></h5>
                </div>
            </div>
        </div>
       <?php $i++; endforeach; ?>
        <?php $form = ActiveForm::begin([
                'options' => [
                    'class' => 'your_contact'
                ],
        ]); ?>
            <div class="left">
                <h3><?=$model->getLabelGifts()['title']?></h3>
                <input name="FormCallback[fio]" type="text" placeholder="<?=$model->getLabelGifts()['fio']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['fio']?>')" oninput="this.setCustomValidity('')" required>
                <input name="FormCallback[email]" type="text" placeholder="<?=$model->getLabelGifts()['email']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['email']?>')" oninput="this.setCustomValidity('')" required>
                <input name="FormCallback[phone]" type="text" placeholder="<?=$model->getLabelGifts()['phone']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['phone']?>')" oninput="this.setCustomValidity('')" required>
                <input name="FormCallback[code]" type="text" placeholder="<?=$model->getLabelGifts()['code']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['code']?>')" oninput="this.setCustomValidity('')" required>
                <?php //\xstreamka\recaptcha\ReCaptcha::widget(); // added hidden input ?>
                <?php // \xstreamka\recaptcha\ReCaptcha::validate(); ?>

            </div>
            <div class="right">
                <textarea name="FormCallback[message]" id="message" cols="30" rows="9" placeholder="<?=$model->getLabel()['message']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['message']?>')" oninput="this.setCustomValidity('')" required></textarea>
                <input type="submit" value="Надіслати">
            </div>
        <?php ActiveForm::end(); ?>
    </div>

    <div class="dark_bcg">
        <div class="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g>
                    <path fill="#ffffff"
                          d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z" />
                </g>
            </svg>
        </div>
    </div>
</section>
