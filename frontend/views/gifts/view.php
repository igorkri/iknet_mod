<!----- gifts ----->
<section class="gifts" id="gifts">
    <div class="block">
        <h2><?= $item->getTitle($item->id) ?></h2>
        <p><?= $item->getDescription($item->id) ?>
        </p>
        <?php foreach ($presents as $present): ?>
        <div class="item" data-filter="gift_1">
            <div class="img">
                <img src="/img/gift1.webp" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <h4><?= $present->getTitle($present->id) ?></h4>
                    <h5>Код:<span>1001</span></h5>
                </div>
                <div class="disc">
                    <p><?= $present->getDescription($present->id) ?></p>
                    <h5>Ціна:<span>399 грн</span></h5>
                </div>
            </div>
        </div>
       <?php endforeach; ?>
        <form action="" class="your_contact">
            <div class="left">
                <h3>Залиште свої контактні дані і ми з вами зв’яжемось</h3>
                <input type="text" placeholder="ПІБ">
                <input type="text" placeholder="Пошта">
                <input type="text" placeholder="Телефон">
                <input type="text" placeholder="Вакансія">
            </div>
            <div class="right">
                <textarea name="" id="" cols="30" rows="9" placeholder="Ваше повідомлення"></textarea>
                <input type="submit" value="Надіслати">
            </div>
        </form>
    </div>

    <div class="dark_bcg">
        <div class="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g>
                    <path fill="#ffffff"
                          d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z" />
                </g>
            </svg>
        </div>
    </div>
</section>
