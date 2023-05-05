<!----- reviews ----->
<section class="about">
<div class="block">
    <h2>Відгуки</h2>
    <?php foreach ($reviews as $review): ?>
        <div class="item">
            <h5><?= $review->getTitle($review->id) ?></h5>
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