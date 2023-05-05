<?php


namespace frontend\controllers;

use common\models\Contacts;
use yii\helpers\VarDumper;
use \yii\web\Controller;


class ContactsController extends Controller
{
    public function actionView()
    {
        $contact = Contacts::find()->one();
        return  $this->render('view',['contact' => $contact]);
    }
}