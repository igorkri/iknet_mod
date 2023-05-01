<!----- about ----->
<section class="about">
    <div class="block">
        <h2><?= $about->title_uk ?></h2>
        <div class="company">
            <div class="text">
                <p><?= $about->description_uk ?></p>
            </div>
            <div class="img">
                <img src="img/about.webp" alt="">
            </div>
        </div>
        <div class="reviews">
            <h2>Відгуки</h2>
            <?php foreach ($reviews as $review): ?>
            <div class="item">
                <h5><?= $review->title_uk ?></h5>
                <p><?= $review->description_uk ?></p>
                <a href="#">Докладніше →</a>
                <p><?= $review->author_uk ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
