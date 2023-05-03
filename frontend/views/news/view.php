<?php

/**
 * @var \common\models\Category $category
 * @var \common\models\Category $parent
 */

//\yii\helpers\VarDumper::dump($category[0]->id, 10,true);
//\yii\helpers\VarDumper::dump($category->getTitle($category->id), 10,true);
//die;
?>
<!----- news ----->
<section class="news">
    <div class="block">
        <h2><?=$category->getTitle($category->id)?></h2>
        <nav class="bookmarks" id="bookmarks">
            <a href="#" class="active">Всі новини</a>
            <?php if ($category->parents): ?>
                <?php foreach ($category->parents as $parent): ?>
                    <a href="<?=$parent->slug?>"><?=$parent->getTitle($parent->id)?></a>
                <?php endforeach; ?>
            <?php endif; ?>
        </nav>
        <?php foreach ($news as $new): ?>
        <a href="news_item.html" class="item">
            <div class="img">
                <img src="<?= $new->image ?>" alt="">
            </div>
            <div class="text">
                <h4><?= $new->title_uk ?></h4>
                <p><?= date('d.m.Y', $new->created_at) ?></p>
                <p><?=strip_tags($new->text_uk); ?></p>
            </div>
        </a>
        <?php endforeach; ?>
    </div>
    <button type="button" class="uni_link">Завантажити ще</button>
</section>
