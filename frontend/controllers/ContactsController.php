<?php


namespace frontend\controllers;

use common\models\Contacts;
use common\models\FormCallback;
use Yii;
use yii\base\BaseObject;
use yii\helpers\VarDumper;
use \yii\web\Controller;


class ContactsController extends Controller
{
    public function actionView()
    {
        $model = new FormCallback();
        $contact = Contacts::find()->one();
        $post = \Yii::$app->request->post('FormCallback');

        if (Yii::$app->request->isPost) {

            $model->sendEmail($post, '', "Контакти" );


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