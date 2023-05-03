<!----- news ----->
<section class="news">
    <div class="block">
        <h2>Новини</h2>
        <nav class="bookmarks" id="bookmarks">
            <a href="#" class="active">Всі новини</a>
            <a href="#">Законодавство</a>
            <a href="#">Виставки</a>
        </nav>
        <?php foreach ($news as $new): ?>
        <a href="news_item.html" class="item">
            <div class="img">
                <img src="<?= $new->image ?>" alt="">
            </div>
            <div class="text">
                <h4><?= $new->title_uk ?></h4>
                <p><?= $new->created_at ?></p>
                <p><?= $new->text_uk ?></p>
            </div>
        </a>
        <?php endforeach; ?>
    </div>
    <button type="button" class="uni_link">Завантажити ще</button>
</section>
