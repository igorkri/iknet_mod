<?php


namespace frontend\controllers;

use \yii\web\Controller;


class ContactsController extends Controller
{
    public function actionView()
    {

      return  $this->render('view');
    }
}