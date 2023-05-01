<?php


namespace frontend\controllers;

use common\models\Reviews;
use \yii\web\Controller;

class ReviewsController extends Controller
{
    public function actionView()
    {
        $reviews = Reviews::find()->all();
        return $this->render('view',['reviews' => $reviews]);
    }

}