<?php

use yii\helpers\Url;

?>
<!----- about ----->
<section class="about">
    <div class="block">
        <h2><?= $about->getTitle($about->id) ?></h2>
        <div class="company">
            <div class="text">
                <p><?= $about->getText($about->id) ?></p>
            </div>
            <div class="img">
                <img src="<?= $about->image ?>" alt="">
            </div>
        </div>
        <div class="reviews">
            <h2><?=$h2?></h2>
            <?php foreach ($reviews as $review): ?>
            <div class="item">
                <h5><?= $review->getTitle($review->id) ?></h5>
                <p><?= $review->getText($review->id) ?></p>
                <a href="<?= Url::to(['/reviews/view']) ?>"><?=$detail?> →</a>
                <p><?= $review->getAuthor($review->id) ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
