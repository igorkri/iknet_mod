<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'style/all.css?v=0.7',
        'style/new_style.css?v=0.7',
        'style/migrate.css',
        'style/footer.css',
//        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
//        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
//        'style/scss/new_style.css?v=0.4',
    ];
    public $js = [
        '/js/slick.min.js?v=7',
//        '/js/slick1.min.js',
        '/js/index.js?v=0.7',
        '/js/jpath.js',
        '/js/solarplant/js/main.js',
        '/js/ema.ajax.min.js',
        '/js/ema.responsive.menu.js',
        //'/js/vendor/underscore.min.js',
        //'/js/slick-1.8.1/slick/slick.js',
        //'/js/jquery.cookie.js',
        //'/js/modernizr.min.js',
        //'/js/jquery.matchHeight.js',
        //'/js/all.min.js',
        '/js/footer.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap5\BootstrapAsset',
    ];
}
