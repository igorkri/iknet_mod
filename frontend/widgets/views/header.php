<?php

use yii\helpers\Url;

$path = Yii::$app->request->pathInfo;
$get = Yii::$app->request->get();

$url = explode('/', $path);

//\yii\helpers\VarDumper::dump($path, 10, true);
//\yii\helpers\VarDumper::dump($get['q'], 10, true);
//die;
/**
 * @var \common\models\Menu $menu
 */
?>
<header id="new_header" class="new_header">
    <div class="block">
        <div class="logo">
            <a href="<?=Url::to(['/', 'language' => $lang])?>" title="iknet">
                <img src="/img/logo.webp" alt="iknet" class="normal-logo">
            </a>
        </div>
        <div class="cont">
            <div class="search">
                <img src="/img/lens.svg" alt="">
                <form action="<?=Url::to(['/search/index'])?>">
                    <input type="text" name="q" id="search-input" placeholder="<?=$search?>">
                </form>
            </div>
            <div class="social_networks">
                <a href="https://twitter.com/iknetUA">
                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M18.7178 2.10837C18.0567 2.40129 17.3466 2.5992 16.6001 2.68866C17.3704 2.22775 17.9466 1.50232 18.2214 0.647744C17.4977 1.07761 16.7056 1.38019 15.8796 1.54233C15.3242 0.949262 14.5885 0.556169 13.7867 0.424077C12.985 0.291986 12.1621 0.428287 11.4457 0.811819C10.7294 1.19535 10.1597 1.80466 9.8251 2.54513C9.49053 3.28561 9.40978 4.11584 9.5954 4.90691C8.12898 4.83328 6.69443 4.45214 5.38486 3.78821C4.07528 3.12428 2.91994 2.19241 1.99381 1.05308C1.67715 1.59933 1.49506 2.23266 1.49506 2.90716C1.49471 3.51436 1.64424 4.11227 1.93038 4.64782C2.21653 5.18338 2.63044 5.64002 3.1354 5.97724C2.54978 5.95861 1.97709 5.80037 1.46498 5.5157V5.5632C1.46492 6.41483 1.75951 7.24025 2.29875 7.89941C2.83799 8.55856 3.58868 9.01085 4.42344 9.17954C3.88018 9.32656 3.31062 9.34822 2.75777 9.24287C2.99329 9.97565 3.45206 10.6164 4.06985 11.0755C4.68765 11.5346 5.43354 11.789 6.2031 11.8031C4.89672 12.8287 3.28335 13.3849 1.62252 13.3825C1.32832 13.3826 1.03437 13.3654 0.742188 13.331C2.42802 14.415 4.39046 14.9902 6.39469 14.988C13.1793 14.988 16.8882 9.36874 16.8882 4.49524C16.8882 4.33691 16.8843 4.17699 16.8771 4.01866C17.5986 3.49693 18.2213 2.85087 18.7162 2.11074L18.7178 2.10837Z"
                                fill=""></path>
                    </svg>
                </a>
                <a href="https://www.facebook.com/iknet.com.ua/">
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M8.86133 9.5625L9.35014 6.4859H6.29386V4.48939C6.29386 3.6477 6.7208 2.82725 8.08961 2.82725H9.47905V0.207852C9.47905 0.207852 8.21817 0 7.01264 0C4.4957 0 2.85052 1.47355 2.85052 4.14109V6.4859H0.0527344V9.5625H2.85052V17H6.29386V9.5625H8.86133Z"
                                fill=""></path>
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCTBveGD1jatti0uLW3dMXXw">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M8 0.0651855C0.1376 0.0651855 0 0.851785 0 6.99519C0 13.1386 0.1376 13.9252 8 13.9252C15.8624 13.9252 16 13.1386 16 6.99519C16 0.851785 15.8624 0.0651855 8 0.0651855ZM10.564 7.29579L6.972 9.18219C6.6576 9.34599 6.4 9.16239 6.4 8.77179V5.21859C6.4 4.82889 6.6576 4.64439 6.972 4.80819L10.564 6.69459C10.8784 6.86019 10.8784 7.13019 10.564 7.29579Z"
                                fill=""></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/ik-net">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5.67822 5.64475H8.30897V6.95517C8.68793 6.2015 9.65977 5.52433 11.1196 5.52433C13.9183 5.52433 14.5827 7.02458 14.5827 9.77717V14.875H11.7493V10.404C11.7493 8.8365 11.3704 7.9525 10.4056 7.9525C9.0676 7.9525 8.51156 8.90521 8.51156 10.4033V14.875H5.67822V5.64475ZM0.819766 14.7546H3.6531V5.52433H0.819766V14.7546ZM4.05897 2.51462C4.05908 2.75211 4.01198 2.98725 3.92042 3.20637C3.82885 3.4255 3.69464 3.62424 3.5256 3.79104C3.18305 4.13148 2.71938 4.32205 2.23643 4.32087C1.75433 4.32055 1.29174 4.13047 0.948682 3.79175C0.780249 3.62438 0.646497 3.42542 0.555092 3.20626C0.463688 2.98711 0.416426 2.75207 0.416016 2.51462C0.416016 2.03508 0.607266 1.57608 0.949391 1.2375C1.29214 0.89832 1.75494 0.708162 2.23714 0.708374C2.72022 0.708374 3.18347 0.898916 3.5256 1.2375C3.86702 1.57608 4.05897 2.03508 4.05897 2.51462Z"
                              fill=""></path>
                    </svg>
                </a>
                <a href="https://iknet.com.ua/uk/innovations#">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M12.8064 1.05746C12.8064 1.05746 14.1015 0.552464 13.9936 1.77889C13.9576 2.2839 13.6339 4.0514 13.382 5.9632L12.5186 11.6264C12.5186 11.6264 12.4467 12.4561 11.7991 12.6004C11.1516 12.7446 10.1803 12.0954 10.0004 11.9511C9.85647 11.8429 7.30227 10.2196 6.40287 9.42607C6.15103 9.20963 5.86323 8.77677 6.43883 8.27177L10.2162 4.66463C10.6479 4.23177 11.0796 3.22177 9.28087 4.4482L4.24437 7.875C4.24437 7.875 3.66877 8.2357 2.58953 7.91107L0.25114 7.18963C0.25114 7.18963 -0.612263 6.64857 0.862717 6.10747C4.46023 4.4121 8.88517 2.68067 12.8064 1.05746Z"
                                fill=""></path>
                    </svg>
                </a>
            </div>
            <div class="tels">
                <a href="tel:<?=str_replace([' ', '(', ')', '-'], '', $contact->tel1)?>"><?=str_replace([' ', '(', ')', '-'], ' ', $contact->tel1)?></a>
                <a href="tel:<?=str_replace([' ', '(', ')', '-'], '', $contact->tel2)?>"><?=str_replace([' ', '(', ')', '-'], ' ', $contact->tel2)?></a>
            </div>
            <div class="languages">
                <?php if(!isset($get["q"])): ?>
                    <a href="<?=Url::to(['/'. $path, 'language' => 'uk'])?>" class="<?=$lang === 'uk' ? 'active' : ''?>">UK</a>
                    <a href="<?=Url::to(['/'. $path, 'language' => 'en'])?>" class="<?=$lang === 'en' ? 'active' : ''?>">EN</a>
                    <a href="<?=Url::to(['/'. $path, 'language' => 'ru'])?>" class="<?=$lang === 'ru' ? 'active' : ''?>">RU</a>
                <?php else: ?>
                    <a href="<?=Url::to(['/'. $path, 'q' => $get["q"], 'language' => 'uk'])?>" class="<?=$lang === 'uk' ? 'active' : ''?>">UK</a>
                    <a href="<?=Url::to(['/'. $path, 'q' => $get["q"], 'language' => 'en'])?>" class="<?=$lang === 'en' ? 'active' : ''?>">EN</a>
                    <a href="<?=Url::to(['/'. $path, 'q' => $get["q"], 'language' => 'ru'])?>" class="<?=$lang === 'ru' ? 'active' : ''?>">RU</a>
                <?php endif; ?>
            </div>
            <!----- Menu ---------->
            <div class="links_drop">
                <div class="menu-main-menu-container">
                    <div class="links">
                        <?php foreach ($menus as $menu): ?>
                        <?php if(!$menu->children): ?>
                        <a class="vulg" href="<?= Url::to(['/'.$menu->slug]) ?>">
                            <?=$menu->getTitleText($menu->id)?>
                        </a>
                        <?php endif; ?>
                        <?php if($menu->children): ?>
                        <div class="developable">
                            <div class="name">
                                <a>
                                    <?=$menu->getTitleText($menu->id)?> </a>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M1.00003 0.5C0.595567 0.5 0.230931 0.743642 0.0761497 1.11732C-0.0786313 1.49099 0.00692445 1.92111 0.292922 2.20711L4.29292 6.20711C4.68345 6.59763 5.31661 6.59763 5.70714 6.20711L9.70714 2.20711C9.99313 1.92111 10.0787 1.49099 9.92391 1.11732C9.76913 0.743642 9.40449 0.5 9.00003 0.5H1.00003Z"
                                            fill=""></path>
                                </svg>
                            </div>
                            <div class="drop">
                                <?php foreach ($menu->children as $child):?>
<!--                                <a href="https://iknet.com.ua/uk/innovations#" class="back">Назад</a>-->
                                    <?php if($child->slug == 'podarunki-energetikam'): ?>
                                        <a href="<?= Url::to(['/gifts/view', 'slug' => $child->slug]) ?>">
                                            <?=$child->getTitleText($child->id)?>
                                        </a>
                                    <?php else: ?>
                                        <a href="<?= Url::to(['/'. $child->slug]) ?>">
                                            <?=$child->getTitleText($child->id)?>
                                        </a>
                                    <?php endif; ?>

                                <?php endforeach; ?>
                            </div>
                        </div>
                        <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <!----- Menu /end ----->
            <div class="burger">
                <img src="/img/burger.svg" alt="">
            </div>
        </div>
    </div>
</header>
