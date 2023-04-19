<?php

use yii\helpers\Url;

$url = Yii::$app->request->getPathInfo();
//\yii\helpers\VarDumper::dump($url, 10, true);
//die;
?>
<div class="boxed-layout">
    <div class="pane-wrapper clearfix">
        <div id="main-content">
            <div class="boxed-layout">
                <div class="pane-wrapper clearfix">
                    <div id="main-content">

                        <div id="sub-header" class="layout-full has-background">
                            <div class="meta-header" style="background-image:none;">
                                <div class="limit-wrapper">
                                    <div class="meta-header-inside">
                                        <header class="page-header ">
                                            <div class="page-header-content">
                                                <h1 style="color:#fff;padding: 11px 56px !important;width: fit-content;margin: 0 auto !important" class="text-divider-double">
                                                    Новини                                        </h1>
                                            </div>
                                        </header>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- #main (do not remove this comment) -->
                        <div class="breadcrumbs">
                            <div class="limit-wrapper">
                                <!--{if isset($bredCrumbs)}
                            {$bredCrumbs}
                        {/if}-->
                            </div>
                        </div>

                        <div id="main" role="main" class="wpv-main layout-full">
                            <div class="limit-wrapper">

                                <div class="row page-wrapper">

                                    <article class="full page type-page status-publish hentry">
                                        <div class="page-content">
                                            <ul class="categories-list articles-tabs">
                                            <?php

                                            foreach ($categories as $category):
                                                ?>
                                                <li class="<?=$url == $category->slug ? 'active' : '' ?>">
                                                    <p>
                                                        <a href="<?=Url::to(['/page/article','slug' => $category->slug, 'language' => $lang])?>">
                                                            <img width="360" height="240" src="uploads/01.jpg" alt="Всі новини">
                                                        </a>
                                                    </p>
                                                    <h2>
                                                        <a href="/uk/articles">
                                                            <?=$category->title_uk?>                                                       </a>
                                                    </h2>
                                                </li>
                                            <?php if($category->parents): ?>
                                                <?php foreach($category->parents as $parent): ?>
                                                    <li class="">
                                                        <h2>
                                                            <a href="<?=Url::to(['/page/article','slug' => $parent->slug, 'language' => $lang])?>">
                                                                <?=$parent->title_uk?>
                                                            </a>
                                                        </h2>
                                                    </li>
                                                <?php endforeach; ?>
                                            <?php endif; ?>
                                            <?php endforeach; ?>
                                            </ul>
                                            <ul class="posts-list">
                                            <?php foreach ($posts as $post):
//                                                \yii\helpers\VarDumper::dump($post, 10, true);
                                                ?>
                                                <li class="background-color__animation">
                                                    <div class="post-media">
                                                        <div class="media-inner">
                                                            <img width="280" height="215" src="<?=$post->image?>" alt="<?=$post->getTitle($post->id, $lang)?>">
                                                        </div>
                                                    </div>
                                                    <div class="post-content">
                                                        <h3 class="color__animation">
                                                            <a href="<?=Url::to(['/page/post','slug' => $post->slug, 'language' => $lang])?>"><?=$post->getTitle($post->id, $lang)?></a>
                                                        </h3>
                                                        <p><?=date('d.m.Y', $post->created_at)?></p>
                                                        <p class="content-preview">
                                                        <?php // $post->getPreview($post->id, $lang)?>
                                                    </div>
                                                </li>
                                            <?php endforeach; ?>
                                            </ul>

                                            <div class="load-more">
                                                <a href="/uk/articles?page=2" class="lm-btn button clearboth"><span>Завантажити ще</span></a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div> <!-- .limit-wrapper -->
                            <div>
                                <div class="slogan-foot"></div>
                                <div class="footer-top-bg">
                                    <div class="footer-img">
                                        <div class="propeller-1">
                                            <img class="propeller-1-image" src="/images/propeller/propeller.png" title="" alt="" style="transform: rotate(1833deg);">
                                        </div>
                                        <div class="propeller-2">
                                            <img class="propeller-2-image" src="/images/propeller/propeller.png" title="" alt="" style="transform: rotate(3666deg);">
                                        </div>
                                        <div class="propeller-3">
                                            <img class="propeller-3-image" src="/images/propeller/propeller.png" title="" alt="" style="transform: rotate(6110deg);">
                                        </div>
                                        <div class="moving-light" style="opacity: 1;"></div>
                                        <div class="window-big-1" style="opacity: 0;"></div>
                                        <div class="window-big-2" style="opacity: 0;"></div>
                                        <div class="window-medium" style="opacity: 0;"></div>
                                        <div class="window-small" style="opacity: 0;"></div>
                                        <img src="/images/propeller/main.png" title="" alt="">
                                    </div>
                                </div>
                            </div>            </div><!-- / #main (do not remove this comment) -->
                    </div><!-- #main-content -->



                </div><!-- / .pane-wrapper -->
            </div><!-- / .boxed-layout -->

        </div><!-- #main-content -->
        <footer class="main-footer">
            <div class="footer-sidebars-wrapper">
                <div id="footer-sidebars" data-rows="6">
                    <div class="row" data-num="0">
                        <aside class="full  last ">
                            <section id="text-4" class="widget widget_text">
                                <div class="textwidget">
                                    <p style="text-align: center;margin-bottom: 25px;">
                                        <a class="wpv-scroll-to-top" href="#top">
                                            ПОВЕРНУТИСЯ ВГОРУ                                        </a>
                                    </p>
                                </div>
                            </section>
                        </aside>
                    </div>
                    <div class="row" data-num="2">
                        <aside class="cell-1-4 col-sm-3 col-12 fit">
                            <section id="nav_menu-16" class="widget widget_nav_menu">
                                <p class="widget-title">Карта сайту</p>
                                <div class="menu-footer-container">
                                    <ul id="menu-footer" class="menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                                            <a href="/uk/about">Про компанію</a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                                            <a href="/uk/#management">Інжиніринг в енергетиці</a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                                            <a href="/uk/#connection">Приєднання об’єктів</a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                                            <a href="/uk/#energy-efficiency">Напрямки бізнесу</a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page "><a href="/uk/articles">Новини</a>
                                        </li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-page "><a href="/uk/#projects">Проєкти</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </aside>
                        <aside class="cell-1-4 col-sm-3 col-12 fit">
                            <section id="text-2" class="widget widget_text">
                                <p class="widget-title">Про компанію</p>
                                <div class="textwidget">ІКНЕТ – експерт в реалізації проєктів альтернативної та традиційної енергетики                                    <br>
                                    <a href="/uk/about">Докладніше                                        → </a></div>
                            </section>
                        </aside>
                        <aside class="cell-1-4 col-sm-3 col-12 fit">
                            <section id="nav_menu-13" class="widget widget_nav_menu">
                                <p class="widget-title">Послуги</p>
                                <div class="menu-services-container">
                                    <ul id="menu-services" class="menu">

                                        <li id="menu-item-11184" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-11184">
                                            <a href="/uk/#management">Управління проєктами в енергетиці</a>
                                        </li>
                                        <li id="menu-item-11185" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-11185">
                                            <a href="/uk/#connection">Приєднання об’єктів енергетики</a>
                                        </li>
                                        <li id="menu-item-11186" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-11186">
                                            <a href="/uk/#energy-efficiency">Напрямки бізнесу</a>
                                        </li>

                                    </ul>
                                </div>
                            </section>
                        </aside>
                        <aside class="cell-1-4 col-sm-3 col-12 fit">
                            <section id="text-3" class="widget widget_text">
                                <div class="textwidget"><p class="widget-title"><a href="/uk/contacts">Контакти</a>
                                    </p>

                                    03113, Україна, м. Київ, <br>
                                    вул. Грушецька, 9-А, оф. 102<br>
                                    <br>
                                    Тел.: +38 (044) 591-08-73<br>
                                    Моб.: +38 (050) 441-70-20<br>

                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="socials-wrapper opacity-icon-hover" style="text-align: center; padding-bottom: 20px">

                </div>
            </div>
            <hr>
            <div class="row">
                <div class="wpv-grid grid-1-1 copyrights">
                    <p>© 2012-2023ТОВ "ІКНЕТ". Всі права захищені, копіювання матеріалів тільки з вказанням зворотнього посилання.</p>
                </div>
            </div>
        </footer>
    </div><!-- / .pane-wrapper -->
</div>
