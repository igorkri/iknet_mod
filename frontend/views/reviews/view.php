<!----- reviews ----->
<section class="about">
<div class="block">
    <h2>Відгуки</h2>
    <?php foreach ($reviews as $review): ?>
        <div class="item">
            <h5><?= $review->title_uk ?></h5>
            <p><?= $review->description_uk ?></p>
           <br>
            <p><?= $review->author_uk ?></p>
            <br>
            <br>
        </div>
    <?php endforeach; ?>
</div>
</section>