<!----- contacts ----->
<section class="contacts">
    <div class="block">
        <h2><?= $contact->getTitle($contact->id) ?></h2>
        <div class="cont">
            <div class="text">
                <address>
                    <img src="/img/address.svg" alt="">
                    <div>
                        <?= $contact->getAdress($contact->id) ?>
                    </div>
                </address>
                <address>
                    <img src="/img/phones.svg" alt="">
                    <div>
                        <a href="tel:<?= $contact->tel1 ?>"><?= $contact->tel1 ?></a>
                        <a href="tel:<?= $contact->tel2 ?>"><?= $contact->tel2 ?></a>
                    </div>
                </address>
                <address>
                    <img src="/img/contacts.svg" alt="">
                    <div>
                        <a href="mailto:<?= $contact->email ?>"><?= $contact->email ?></a>
                        <a href="<?= $contact->site ?>"><?= $contact->site ?></a>
                    </div>
                </address>
                <p><?= $contact->getComent($contact->id) ?></p>
            </div>
            <div class="img">
                <img src="<?= $contact->getImage($contact->id) ?>" alt="">
            </div>
        </div>
    </div>
</section>

<!----- contact_us ----->
<section class="contact_us">
    <form action="">
        <div class="left">
            <h3>Зв’язатись з нами</h3>
            <input type="text" placeholder="ПІБ">
            <input type="text" placeholder="Пошта">
            <input type="text" placeholder="Телефон">
        </div>
        <div class="right">
            <textarea name="" id="" cols="30" rows="9" placeholder="Ваше повідомлення"></textarea>
            <input type="submit">
        </div>
    </form>
</section>

