<section class="reclame" id="reclame">
    <div class="block">
        <img src="/img/IKNET.webp" alt="">
        <h2>Експерт в реалізації проєктів альтернативної та традиційної енергетики</h2>
        <div class="counter">
            <?php foreach ($reclames as $reclame): ?>
            <div class="item">
                <p><?=$reclame->getTitle($reclame->id)?></p>
                <h3><span><?=$reclame->qty?></span><?=$reclame->getValue($reclame->id)?></h3>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
