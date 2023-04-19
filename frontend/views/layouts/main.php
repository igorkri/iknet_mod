<?php

/** @var \yii\web\View $this */
/** @var string $content */

use common\models\Menu;
use common\widgets\Alert;
use frontend\assets\AppAsset;
use yii\bootstrap5\Breadcrumbs;
use yii\bootstrap5\Html;
use yii\bootstrap5\Nav;
use yii\bootstrap5\NavBar;
use yii\helpers\Url;

AppAsset::register($this);
$menu = Menu::getList();
$lang = \Yii::$app->session->get('_language');
//\yii\helpers\VarDumper::dump(Yii::$app->controller->id, 5,true);
//\yii\helpers\VarDumper::dump(Yii::$app->controller->action->id, 5,true);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100">
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
<body class="full responsive-layout">
<?php $this->beginBody() ?>
<!-- Google Tag Manager (noscript) -->
<!--<noscript>-->
<!--    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW7M3R6"-->
<!--            height="0" width="0" style="display:none;visibility:hidden"></iframe>-->
<!--</noscript>-->
<!-- End Google Tag Manager (noscript) -->
<div class="fixed-header-box">

    <header id="new_header" class="new_header">
        <div class="block">
            <div class="logo">
                <a href="/" title="iknet">
                    <img src="/img/logo.png" alt="iknet" class="normal-logo"/>
                </a>
            </div>
            <div class="cont">
                <div class="search">
                    <img src="/img/lens.svg" alt="">
                    <input type="text" id="search-input"
                           placeholder="<?= \frontend\helpers\SystemHelper::getText('SITE_SEARCH') ?>" <?php if (!empty($query)) echo "value='{$query}'" ?>>
                </div>
                <div class="social_networks">
                    <a href="https://twitter.com/iknetUA">
                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M18.7178 2.10837C18.0567 2.40129 17.3466 2.5992 16.6001 2.68866C17.3704 2.22775 17.9466 1.50232 18.2214 0.647744C17.4977 1.07761 16.7056 1.38019 15.8796 1.54233C15.3242 0.949262 14.5885 0.556169 13.7867 0.424077C12.985 0.291986 12.1621 0.428287 11.4457 0.811819C10.7294 1.19535 10.1597 1.80466 9.8251 2.54513C9.49053 3.28561 9.40978 4.11584 9.5954 4.90691C8.12898 4.83328 6.69443 4.45214 5.38486 3.78821C4.07528 3.12428 2.91994 2.19241 1.99381 1.05308C1.67715 1.59933 1.49506 2.23266 1.49506 2.90716C1.49471 3.51436 1.64424 4.11227 1.93038 4.64782C2.21653 5.18338 2.63044 5.64002 3.1354 5.97724C2.54978 5.95861 1.97709 5.80037 1.46498 5.5157V5.5632C1.46492 6.41483 1.75951 7.24025 2.29875 7.89941C2.83799 8.55856 3.58868 9.01085 4.42344 9.17954C3.88018 9.32656 3.31062 9.34822 2.75777 9.24287C2.99329 9.97565 3.45206 10.6164 4.06985 11.0755C4.68765 11.5346 5.43354 11.789 6.2031 11.8031C4.89672 12.8287 3.28335 13.3849 1.62252 13.3825C1.32832 13.3826 1.03437 13.3654 0.742188 13.331C2.42802 14.415 4.39046 14.9902 6.39469 14.988C13.1793 14.988 16.8882 9.36874 16.8882 4.49524C16.8882 4.33691 16.8843 4.17699 16.8771 4.01866C17.5986 3.49693 18.2213 2.85087 18.7162 2.11074L18.7178 2.10837Z"
                                    fill=""/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/iknet.com.ua/">
                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M8.86133 9.5625L9.35014 6.4859H6.29386V4.48939C6.29386 3.6477 6.7208 2.82725 8.08961 2.82725H9.47905V0.207852C9.47905 0.207852 8.21817 0 7.01264 0C4.4957 0 2.85052 1.47355 2.85052 4.14109V6.4859H0.0527344V9.5625H2.85052V17H6.29386V9.5625H8.86133Z"
                                    fill=""/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCTBveGD1jatti0uLW3dMXXw">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M8 0.0651855C0.1376 0.0651855 0 0.851785 0 6.99519C0 13.1386 0.1376 13.9252 8 13.9252C15.8624 13.9252 16 13.1386 16 6.99519C16 0.851785 15.8624 0.0651855 8 0.0651855ZM10.564 7.29579L6.972 9.18219C6.6576 9.34599 6.4 9.16239 6.4 8.77179V5.21859C6.4 4.82889 6.6576 4.64439 6.972 4.80819L10.564 6.69459C10.8784 6.86019 10.8784 7.13019 10.564 7.29579Z"
                                    fill=""/>
                        </svg>
                    </a>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M15.9865 6.91512C16.0839 7.43683 16.1369 7.98229 16.1369 8.5515C16.1369 13.0038 13.1571 16.1697 8.65645 16.1697C7.63295 16.17 6.61941 15.9687 5.67376 15.5771C4.72811 15.1856 3.86888 14.6116 3.14515 13.8878C2.42143 13.1641 1.8474 12.3049 1.45587 11.3592C1.06433 10.4136 0.86297 9.40004 0.863282 8.37654C0.86297 7.35304 1.06433 6.33951 1.45587 5.39386C1.8474 4.4482 2.42143 3.58897 3.14515 2.86524C3.86888 2.14152 4.72811 1.56749 5.67376 1.17596C6.61941 0.784426 7.63295 0.583062 8.65645 0.583374C10.7607 0.583374 12.519 1.35762 13.868 2.61479L11.6711 4.81167V4.80612C10.8533 4.02712 9.81545 3.62733 8.65645 3.62733C6.08511 3.62733 3.99512 5.79967 3.99512 8.37179C3.99512 10.9431 6.08511 13.1202 8.65645 13.1202C10.9895 13.1202 12.5776 11.7862 12.9037 9.95433H8.65645V6.91512H15.9873H15.9865Z"
                                fill=""/>
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/ik-net">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5.67822 5.64475H8.30897V6.95517C8.68793 6.2015 9.65977 5.52433 11.1196 5.52433C13.9183 5.52433 14.5827 7.02458 14.5827 9.77717V14.875H11.7493V10.404C11.7493 8.8365 11.3704 7.9525 10.4056 7.9525C9.0676 7.9525 8.51156 8.90521 8.51156 10.4033V14.875H5.67822V5.64475ZM0.819766 14.7546H3.6531V5.52433H0.819766V14.7546ZM4.05897 2.51462C4.05908 2.75211 4.01198 2.98725 3.92042 3.20637C3.82885 3.4255 3.69464 3.62424 3.5256 3.79104C3.18305 4.13148 2.71938 4.32205 2.23643 4.32087C1.75433 4.32055 1.29174 4.13047 0.948682 3.79175C0.780249 3.62438 0.646497 3.42542 0.555092 3.20626C0.463688 2.98711 0.416426 2.75207 0.416016 2.51462C0.416016 2.03508 0.607266 1.57608 0.949391 1.2375C1.29214 0.89832 1.75494 0.708162 2.23714 0.708374C2.72022 0.708374 3.18347 0.898916 3.5256 1.2375C3.86702 1.57608 4.05897 2.03508 4.05897 2.51462Z"
                                  fill=""/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M12.8064 1.05746C12.8064 1.05746 14.1015 0.552464 13.9936 1.77889C13.9576 2.2839 13.6339 4.0514 13.382 5.9632L12.5186 11.6264C12.5186 11.6264 12.4467 12.4561 11.7991 12.6004C11.1516 12.7446 10.1803 12.0954 10.0004 11.9511C9.85647 11.8429 7.30227 10.2196 6.40287 9.42607C6.15103 9.20963 5.86323 8.77677 6.43883 8.27177L10.2162 4.66463C10.6479 4.23177 11.0796 3.22177 9.28087 4.4482L4.24437 7.875C4.24437 7.875 3.66877 8.2357 2.58953 7.91107L0.25114 7.18963C0.25114 7.18963 -0.612263 6.64857 0.862717 6.10747C4.46023 4.4121 8.88517 2.68067 12.8064 1.05746Z"
                                    fill=""/>
                        </svg>
                    </a>
                </div>
                <div class="tels">
                    <a href="tel:+380445910873">+38 044 591 08 73</a>
                    <a href="tel:+380504417020">+38 050 441 70 20</a>
                </div>
                <div class="languages">
                    <a href="<?=Url::to([Yii::$app->controller->id . '/' . Yii::$app->controller->action->id, 'language' => 'uk'])?>" class="<?=($lang == 'uk') ? 'active' : ''?>">UK</a>
                    <a href="<?=Url::to([Yii::$app->controller->id . '/' . Yii::$app->controller->action->id, 'language' => 'en'])?>" class="<?=($lang == 'en') ? 'active' : ''?>">EN</a>
                    <a href="<?=Url::to([Yii::$app->controller->id . '/' . Yii::$app->controller->action->id, 'language' => 'ru'])?>" class="<?=($lang == 'ru') ? 'active' : ''?>">RU</a>
                </div>

                <div class="links_drop">
                    <a href="#content" title="Skip to content" class="visuallyhidden">Skip to content</a>
                    <div class="menu-main-menu-container">
                        <div class="links">

                            <?php foreach ($menu as $val):
                                ?>
                                <?php if (!$val->children): ?>
                                    <a class="vulg" href="<?=Url::to(['/page/article','slug' => $val->slug, 'language' => $lang]) ?>">
                                        <?= $val->getTitleText($val->id) ?>
                                    </a>
                                <?php else: ?>
                                    <div class="developable">

                                        <div class="name">
                                            <?php if ($val->slug === 'poslugi'): ?>
                                                <a>
                                                    <?= $val->getTitleText($val->id) ?>
                                                </a>
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                            d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                                            fill=""/>
                                                </svg>
                                            <?php endif; ?>
                                            <?php if ($val->slug != 'poslugi'): ?>
                                                <a href="<?=Url::to([$val->slug, 'language' => $lang]) ?>">
                                                    <?=$val->getTitleText($val->id) ?>
                                                </a>
                                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                            d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                                            fill=""/>
                                                </svg>
                                            <?php endif; ?>
                                        </div>

                                        <div class="drop">
                                            <a href="#" class="back">Назад</a>
                                            <?php foreach ($val->children as $valChildren): ?>
                                                <a href="<?=Url::to([$valChildren->slug, 'language' => $lang]) ?>">
                                                    <?=$valChildren->getTitleText($valChildren->id) ?>
                                                </a>
                                            <?php endforeach ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach ?>

                        </div>
                    </div>
                </div>

                <div class="burger">
                    <img src="/img/burger.svg" alt="">
                </div>

            </div>
    </header>
</div><!-- / .fixed-header-box -->
<br><br>
<?= $content ?>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage();
