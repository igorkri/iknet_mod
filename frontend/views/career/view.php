<?php

//use kartik\form\ActiveForm;
use manchenkov\yii\recaptcha\ReCaptchaWidget;
//use yii\bootstrap5\ActiveForm;

use yii\widgets\ActiveForm;

$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
    $h2 =  'Карьера';
    $h4 =  'Вакансии:';
    $textUpload = 'Загрузить резюме (в формате PDF)';
    $buttonFile = 'Выбрать файл';
    $isFile = 'Выбрано файлов';
    $sendForm = 'Отправить';
    $noFile = 'Файл не выбран';
    $noVacansies = 'К сожалению, на данный момент вакансий нет.';
}elseif($lang == 'en'){
    $h2 =  'Career';
    $h4 =  'Vacancies:';
    $textUpload = 'Download resume (in PDF format)';
    $buttonFile = 'Select a file';
    $isFile = 'Files selected';
    $sendForm = 'Send';
    $noFile = 'No file selected';
    $noVacansies = 'Unfortunately, at the moment, there are no vacancies.';
}else{
    $h2 =  'Кар\'єра';
    $h4 =  'Вакансії:';
    $textUpload = 'Завантажити резюме (у форматі PDF)';
    $buttonFile = 'Вибрати файл';
    $isFile = 'Обрано файлів';
    $sendForm = 'Надіслати';
    $noFile = 'Не вибрано жодного файлу';
    $noVacansies = 'Нажаль, на даний момент, вакансій немає.';
}

?>

<!----- career ----->
<section class="career" id="career" data-lang="<?=$lang?>">
    <div class="block">
        <h2><?= $h2 ?></h2>
        <div class="text">
            <div class="info">
                <p><?= $text->getTopText($text->id) ?></p>
                <h4><?= $h4 ?></h4>
                <?php if ($vacancies != null) { ?>
                    <?php foreach ($vacancies as $vacancy): ?>
                        <?php if ($vacancy->published != 0): ?>
                            <div class="vacancy">
                                <div class="head">
                                    <div><?= $vacancy->getVacTitle($vacancy->id) ?></div>
                                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                                fill="black"/>
                                    </svg>
                                </div>
                                <div class="drop">
                                    <?= $vacancy->getVacMessage($vacancy->id) ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php } else { ?>
                    <p><?=$noVacansies?></p>
                <?php } ?>
                <p><?= $text->getDownText($text->id) ?></p>
            </div>
            <div class="img">
                <img src="/img/career.webp" alt="">
            </div>
        </div>
        <?php $form = ActiveForm::begin([
            'options' => [
                'class' => 'your_contact'
            ],
        ]); ?>
        <div class="left">
            <h3><?=$model->getLabelGifts()['title']?></h3>
            <input name="FormCallback[fio]" type="text" placeholder="<?=$model->getLabelGifts()['fio']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['fio']?>')" oninput="this.setCustomValidity('')" required>
            <input name="FormCallback[email]" type="text" placeholder="<?=$model->getLabelGifts()['email']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['email']?>')" oninput="this.setCustomValidity('')" required>
            <input name="FormCallback[phone]" type="text" placeholder="<?=$model->getLabelGifts()['phone']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['phone']?>')" oninput="this.setCustomValidity('')" required>
            <input name="FormCallback[vacancies]" type="text" placeholder="<?=$model->getLabelGifts()['vacancies']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['vacancies']?>')" oninput="this.setCustomValidity('')" required>
            <?=$form->field($model, 'captcha')->widget(ReCaptchaWidget::class);?>
        </div>
        <div class="right">
<!--

    $isFile = 'Выбрано файлов';-->
            <textarea name="FormCallback[message]" id="message" cols="30" rows="9" placeholder="<?=$model->getLabel()['message']?>" oninvalid="this.setCustomValidity('<?=$model->getMessError()['message']?>')" oninput="this.setCustomValidity('')" required></textarea>
            <p><?=$textUpload?></p>
            <div class="file_wrapper">
                <label for="file">
                    <?=$buttonFile?>
                </label>
                <?php $form->field($model, 'file')->fileInput() ?>
                <input name="FormCallback[file]" type="file" accept=".pdf" id="file">
                <span><?=$noFile?></span>
            </div>
            <input type="submit" value="<?=$sendForm?>">
        </div>
        <?php ActiveForm::end(); ?>
    </div>
</section>
