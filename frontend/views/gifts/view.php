<?php

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
        <form action="" class="your_contact">
            <div class="left">
                <h3>Залиште свої контактні дані і ми з вами зв’яжемось</h3>
                <input type="text" placeholder="ПІБ">
                <input type="text" placeholder="Пошта">
                <input type="text" placeholder="Телефон">
                <input type="text" placeholder="Вакансія">
            </div>
            <div class="right">
                <textarea name="" id="" cols="30" rows="9" placeholder="Ваше повідомлення"></textarea>
                <input type="submit" value="Надіслати">
            </div>
        </form>
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
