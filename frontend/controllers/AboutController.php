<?php


namespace frontend\controllers;

use common\models\About;
use common\models\Reviews;
use \yii\web\Controller;


class AboutController extends Controller
{
    public function actionView()
    {
        $about = About::find()->one();
        $reviews = Reviews::find()->all();
        return $this->render('view',['about' => $about, 'reviews' => $reviews]);
    }
}