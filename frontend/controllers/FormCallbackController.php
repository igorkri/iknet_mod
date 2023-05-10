<?php

namespace frontend\controllers;

use common\models\FormCallback;
use Yii;
use yii\base\BaseObject;
use yii\helpers\VarDumper;

class FormCallbackController extends \yii\web\Controller
{
    public function actionIndex()
    {
        $model = new FormCallback();

        $post = \Yii::$app->request->post('FormCallback');

        if ($this->request->isPost) {
            $model->sendEmail($post);
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['/contacts/view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('/contacts/view', [
            'model' => $model,
        ]);
    }

}
