<?php

$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
     $h2 =  'Отзывы';
}elseif($lang == 'en'){
     $h2 =  'Reviews';
}else{
     $h2 =  'Відгуки';
}

?>
<!----- reviews ----->
<section class="about">
<div class="block">
    <h2><?= $h2 ?></h2>
    <?php foreach ($reviews as $review): ?>
        <div class="item">
            <h3><?= $review->getTitle($review->id) ?></h3>
            <br>
            <p><?= $review->getText($review->id) ?></p>
           <br>
            <p><?= $review->getAuthor($review->id) ?></p>
            <br>
            <br>
            <br>
        </div>
    <?php endforeach; ?>
</div>
</section>