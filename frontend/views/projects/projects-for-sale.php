<?php
use yii\helpers\Url;

$get = Yii::$app->request->get();
$slug = $get['slug'] ?? null;
$page = $get['page'] ?? 1;
//\yii\helpers\VarDumper::dump($slug, 10, true);
//die;
?>

<section class="news">
    <?php \yii\widgets\Pjax::begin() ?>
    <div class="block">
        <h2><?=$category->getTitle($category->id)?></h2>
        <nav class="bookmarks" id="bookmarks">
            <?php if ($tabs): ?>
                <?php foreach ($tabs->parents as $parent): ?>
                    <?php if($slug === 'projects-for-sale' || $slug === null): ?>
                        <a href="<?=Url::to(['projects-for-sale', 'slug' => $parent->slug])?>"
                           class="<?= $parent->slug === 'vsi-proekti' ? 'active' : ''?>">
                            <?=$parent->getTitle($parent->id)?>
                        </a>
                    <?php else: ?>
                        <a href="<?=Url::to(['projects-for-sale', 'slug' => $parent->slug])?>"
                           class="<?= $parent->slug === $slug ? 'active' : ''?>">
                            <?=$parent->getTitle($parent->id)?>
                        </a>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php endif; ?>
        </nav>
        <?php foreach ($news as $new): ?>
            <a href="<?=Yii::$app->urlManager->createUrl(['/projects/view', 'c' => $new->getUrlParams($new->category_id)['c'], 'a' => $new->getUrlParams($new->category_id)['a'],'slug' => $new->slug])?>" class="item">
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
    <?php
        echo \yii\helpers\Html::a('Завантажити ще', ['companys-projects', 'page' => $page ? $page + 1 : 2], ['type'=>'button', 'class'=>'uni_link'])
    ?>
    <?php \yii\widgets\Pjax::end() ?>
</section>