<?php


namespace frontend\controllers;

use \yii\web\Controller;


class AboutController extends Controller
{
    public function actionView()
    {
//        print_r(\Yii::$app->request->get());
//        die;
        return $this->render('view');
    }
}