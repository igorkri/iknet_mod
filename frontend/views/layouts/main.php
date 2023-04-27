<?php

/** @var \yii\web\View $this */
/** @var string $content */

use common\models\Menu;
use frontend\assets\AppAsset;
use yii\bootstrap5\Html;


AppAsset::register($this);
$menu = Menu::getList();
$lang = \Yii::$app->session->get('_language');
//\yii\helpers\VarDumper::dump(Yii::$app->controller->id, 5,true);
//\yii\helpers\VarDumper::dump(Yii::$app->controller->action->id, 5,true);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <!-- Google Tag Manager -->
<!--    <script>(function (w, d, s, l, i) {-->
<!--            w[l] = w[l] || [];-->
<!--            w[l].push({-->
<!--                'gtm.start':-->
<!--                    new Date().getTime(), event: 'gtm.js'-->
<!--            });-->
<!--            var f = d.getElementsByTagName(s)[0],-->
<!--                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';-->
<!--            j.async = true;-->
<!--            j.src =-->
<!--                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;-->
<!--            f.parentNode.insertBefore(j, f);-->
<!--        })(window, document, 'script', 'dataLayer', 'GTM-NW7M3R6');</script>-->
    <!-- End Google Tag Manager -->
</head>
<body>
<?php $this->beginBody() ?>
<!-- Google Tag Manager (noscript) -->
<!--<noscript>-->
<!--    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW7M3R6"-->
<!--            height="0" width="0" style="display:none;visibility:hidden"></iframe>-->
<!--</noscript>-->
<!-- End Google Tag Manager (noscript) -->

<!----- Хедер ----->
<?=$this->render('header')?>

<?=$content?>

<!----- Футер ----->
<?=$this->render('footer')?>


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage();
