<?php

use yii\helpers\Url;

$slug = Yii::$app->request->get('slug');
?>
<section class="news">
    <div class="block">
        <h2><?=$category->getTitle($category->id)?></h2>
        <nav class="bookmarks" id="bookmarks">
            <a href="<?=Url::to(['view', 'slug' => null])?>" class="<?= $slug == null || $slug == 'articles' ? 'active' : ''?>">Всі проєкти</a>
            <?php if ($tabs): ?>
                <?php foreach ($tabs->parents as $parent): ?>
                    <a href="<?=Url::to(['companys-projects', 'slug' => $parent->slug])?>" class="<?= $parent->slug === $slug ? 'active' : ''?>"><?=$parent->getTitle($parent->id)?></a>
                <?php endforeach; ?>
            <?php endif; ?>
        </nav>
        <?php foreach ($news as $new): ?>
            <a href="<?=Url::to(['view', 'slug' => $new->slug])?>" class="item">
                <div class="img">
                    <img src="<?= $new->image ?>" alt="">
                </div>
                <div class="text">
                    <h4><?= $new->getTitle($new->id) ?></h4>
                    <p><?= date('d.m.Y', $new->created_at) ?></p>
                    <div class="short_descr">
                        <p><?= strip_tags($new->getText($new->id)) ?></p>
                    </div>
                </div>
            </a>
        <?php endforeach; ?>
    </div>
    <button type="button" class="uni_link">Завантажити ще</button>
</section>