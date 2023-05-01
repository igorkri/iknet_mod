<?php


namespace frontend\controllers;

use \yii\web\Controller;


class GiftsController extends Controller
{
    public function actionView()
    {
      return  $this->render('view');
    }
}