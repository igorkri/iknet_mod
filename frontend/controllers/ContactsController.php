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

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view',
                    'contact' => $contact,
                    'model' => $model
                ]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return  $this->render('view',[
            'contact' => $contact,
            'model' => $model
        ]);
    }
}