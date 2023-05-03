<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'language' => 'uk-UA',
    'controllerNamespace' => 'frontend\controllers',
    'defaultRoute' => '/site',
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-frontend',
            'baseUrl' => '',
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => \yii\log\FileTarget::class,
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'urlManager' => [
            'class' => 'codemix\localeurls\UrlManager',
            'languages' => ['uk', 'en', 'ru'],
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                '/' => '/site/index',
                'about' => '/site/about',
//                '/<slug:\w+>' => '/page/article',
//                'articles/<slug:\w+>' => '/page/article',
//                '/<lang:\w+>' => 'site/index',
//                '/<lang:\w+/>' => 'site/index',
//                '/<lang:\w+>/about' => 'site/about',
//                '/<lang:\w+>/contacts' => 'site/contacts',
//                '/<lang:\w+>/search' => 'site/search',
//                '/<lang:\w+>/projects' => 'page/articles',
//                '/<lang:\w+>/projects/<url:(.+)>' => 'page/articles',
//                '/<lang:\w+>/articles' => 'page/articles',
//                '/<lang:\w+>/articles/<url:(.+)>' => 'page/articles',
//                '/<lang:\w+>/<url:(.+)>' => 'page/index'
            ],
        ],
    ],
    'params' => $params,
];
