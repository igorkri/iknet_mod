<?php


namespace frontend\controllers;

use \yii\web\Controller;


class ContactsController extends Controller
{
    public function actionView()
    {
        $this->render('view');
    }
}