<?php

namespace frontend\controllers;

use common\models\FormCallback;
use yii\base\BaseObject;

class FormCallbackController extends \yii\web\Controller
{
    public function actionIndex()
    {
        $model = new FormCallback();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['index', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('index', [
            'model' => $model,
        ]);
    }

}
