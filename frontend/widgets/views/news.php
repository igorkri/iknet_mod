<section class="main_news" id="main_news">
    <div class="block">
        <img src="/img/news.svg" alt="" class="news_img">
        <div class="news_slider">
            <?php use yii\helpers\Url;

            foreach($news as $new): ?>
            <?php if(
                    isset($new->image)
                    && !empty($new->image)
                    && $new->image != '-'
                    || $new->image_og != '-'
                    && file_exists(Yii::getAlias('@frontend/web/' . $new->image))
                    || file_exists(Yii::getAlias('@frontend/web/' . $new->image_og))
                ): ?>
                <a href="<?=Url::to(['news/item', 'slug' => $new->slug])?>" class="item">
                    <div>
                        <?php if(isset($new->image) && !empty($new->image)): ?>
                            <img src="<?=$new->image?>" alt="">
                        <?php elseif (isset($new->image_og) && !empty($new->image_og)): ?>
                            <img src="<?=$new->image_og?>" alt="">
                        <?php endif; ?>
                    </div>
                    <h3><?=$new->getTitle($new->id)?></h3>
                </a>
            <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <a href="#" class="uni_link">Усі новини</a>
    </div>
</section>
