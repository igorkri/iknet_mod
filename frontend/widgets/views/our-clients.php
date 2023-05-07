<?php if($cliennts): ?>
<section class="our_clients">
    <div class="block">
        <img src="<?=$img?>" alt="" class="our_clients_img">
        <div class="our_clients_slider" id="our_clients_slider">
                <?php foreach($cliennts as $cliennt): ?>
                    <div class="item">
                        <img src="/images/client-brand/<?=$cliennt->file?>" alt="">
                    </div>
                <?php endforeach; ?>
        </div>
    </div>
</section>
<?php endif; ?>
