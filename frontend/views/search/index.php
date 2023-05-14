<?php

use yii\helpers\Url;

$param = \Yii::$app->request->get('q');
$lang = \Yii::$app->session->get('_language');

?>
<section class="news">
    <div class="block">
        <?php if($pages):
            if($lang == 'ru'){
                echo '<h2>По вашему запросу <b>"'.$param.'"</b> найдено <b>'.count($pages).'</b> записей.</h2>';
            }elseif($lang == 'en'){
                echo '<h2>Your query <b>"'.$param.'"</b> found <b>'.count($pages).'</b> records.</h2>';
            }else{
                echo '<h2>На ваш запит <b>"'.$param.'"</b> знайдено <b>'.count($pages).'</b> записів.</h2>';
            }
        ?>
            
        <?php foreach ($pages as $new): ?>
            <?php
                $url = explode('/', $new['slug']);
            ?>
            <a href="<?=Url::to(['/'.$url[1].'/'.$url[2], 'slug' => $url[3]])?>" class="item">
                <div class="img">
                    <img src="<?= $new['image'] ?>" alt="">
                </div>
                <div class="text">
                    <h4><?= $new->getTitle($new['id']) ?></h4>
                    <p><?= date('d.m.Y', $new['created_at']) ?></p>
                    <div class="short_descr">
                        <p><?= strip_tags($new->getTextShort($new['id'])) ?>...</p>
                    </div>
                </div>
            </a>
        <?php endforeach; ?>
        <?php else: ?>
            <?php
                if($lang == 'ru'){
                    echo '<h2>По вашему запросу <b>"' .$param . '"</b> ничего не найдено...</h2>';
                }elseif($lang == 'en'){
                    echo '<h2>At your request <b>"' .$param . '"</b> nothing found...</h2>';
                }else{
                    echo '<h2>По вашому запиту <b>"' .$param . '"</b> нічого не знайдено...</h2>';
                }

            ?>
        <?php endif; ?>
    </div>
</section>
