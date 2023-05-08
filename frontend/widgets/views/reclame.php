<?php

$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
    $h2 =  'Эксперт в реализации проектов альтернативной и традиционной энергетики';

}elseif($lang == 'en'){
    $h2 =  'An expert in the implementation of alternative and traditional energy projects';

}else{
    $h2 =  'Експерт в реалізації проєктів альтернативної та традиційної енергетики';

}

?>


<section class="reclame" id="reclame">
    <div class="block">
        <img src="/img/IKNET.png" alt="">
        <h2><?= $h2 ?></h2>
        <div class="counter">
            <?php foreach ($reclames as $reclame): ?>
            <div class="item">
                <p><?=$reclame->getTitle($reclame->id)?></p>
                <h3><span><?=$reclame->qty?></span><?=$reclame->getValue($reclame->id)?></h3>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
