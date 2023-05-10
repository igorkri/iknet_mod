<?php


namespace frontend\controllers;

use common\models\Contacts;
use common\models\FormCallback;
use yii\base\BaseObject;
use yii\helpers\VarDumper;
use \yii\web\Controller;


class ContactsController extends Controller
{
    public function actionView()
    {
        $model = new FormCallback();
        $contact = Contacts::find()->one();
        return  $this->render('view',[
            'contact' => $contact,
            'model' => $model
        ]);
    }
}