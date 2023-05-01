<?php


namespace frontend\controllers;

use \yii\web\Controller;

class NewsController extends Controller
{
    public function actionView()
    {
        return $this->render('view');
    }
}