<?php

use yii\helpers\Url;
use yii\widgets\LinkPager;

$get = Yii::$app->request->get();
$slug = $get['slug'] ?? null;
$page = $get['page'] ?? 1;
//\yii\helpers\VarDumper::dump($slug, 10, true);
//die;
?>
<section class="news">
    <?php // \yii\widgets\Pjax::begin(['id' => 'new-list']) ?>
    <div class="block">
        <h2><?=$category->getTitle($category->id)?></h2>
        <nav class="bookmarks" id="bookmarks">
            <?php if ($tabs): ?>
                <?php foreach ($tabs->parents as $parent): ?>
                    <?php if($slug === null): ?>
                        <a href="<?=Url::to(['view', 'slug' => $parent->slug])?>"
                           class="<?= $parent->slug === null ? 'active' : ''?>">
                            <?=$parent->getTitle($parent->id)?>
                        </a>
                    <?php else: ?>
                        <a href="<?=Url::to(['view', 'slug' => $parent->slug])?>"
                           class="<?= $parent->slug === $slug ? 'active' : ''?>">
                            <?=$parent->getTitle($parent->id)?>
                        </a>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php endif; ?>
        </nav>

        <?php foreach ($news as $new): ?>
            <a href="<?=Yii::$app->urlManager->createUrl(['/news/item','slug' => $new->slug])?>" class="item">
                <div class="img">
                    <img src="<?= $new->image ?>" alt="">
                </div>
                <div class="text">
                    <h4><?= $new->getTitle($new->id) ?></h4>
                    <p><?= date('d.m.Y', $new->created_at) ?></p>
                    <div class="short_descr">
                        <p><?= strip_tags($new->getTextShort($new->id)) ?><?= strlen($new->getTextShort($new->id))  > 600 ? "..." : ''?></p>
                    </div>
                </div>
            </a>
        <?php endforeach; ?>
    </div>
    <?php
    if($slug === null){
        echo \yii\helpers\Html::a($pagination_btn, ['view', 'page' => $page ? $page + 1 : 2], [
            'type'=>'button',
            'class'=>'uni_link',
            'data-pjax'=>1,
            'onclick' => 'page(' . $page . ')'

        ]);
//        echo \yii\helpers\Html::button($pagination_btn, [
//            'type'=>'button',
//            'class'=>'uni_link',
////            'data-pjax'=>1,
//            'onclick' => 'page(' . $page . ')'
//
//        ]);
    }else{
        echo \yii\helpers\Html::a($pagination_btn, ['view', 'slug' => $slug,'page' => $page ? $page + 1 : 2], [
            'type'=>'button',
            'class'=>'uni_link',
            'data-pjax'=>1,
            'onclick' => 'page(' . $page . ')'
        ]);

    }
    ?>
    <?php //\yii\widgets\Pjax::end() ?>
</section>

<!--<script>-->
<!--    function page(page){-->
<!--        $.ajax({-->
<!--            url: '/news/view',-->
<!--            method: 'get',-->
<!--            // dataType: 'json',-->
<!--            data: {-->
<!--                'page': page-->
<!--            },-->
<!--            success: function(data) {-->
<!--                document.location.reload();-->
<!--                console.log(data);-->
<!--            }-->
<!--        });-->
<!---->
<!--    }-->
<!--</script>-->