<?php


namespace frontend\controllers;

use common\models\About;
use common\models\Reviews;
use \yii\web\Controller;


class AboutController extends Controller
{
    public function actionView()
    {
        $lang = \Yii::$app->session->get('_language');
        $detail = 'Докладніше';
        $h2 = 'Відгуки';
        if($lang === 'en'){
            $detail = 'Read more';
            $h2 = 'Reviews';
        }elseif ($lang === 'ru'){
            $detail = 'Подробнее';
            $h2 = 'Отзывы';

        }
        $about = About::find()->one();
        $reviews = Reviews::find()->all();
        return $this->render('view',[
            'about' => $about,
            'reviews' => $reviews,
            'detail' => $detail,
            'h2' => $h2
        ]);
    }
}