<?php


namespace frontend\controllers;

use common\models\FormCallback;
use common\models\PageCareer;
use common\models\Vacancies;
use Yii;
use yii\base\BaseObject;
use yii\web\Controller;
use yii\web\UploadedFile;


class CareerController extends Controller
{
    public function actionView()
    {
        $model = new FormCallback();
        $text = PageCareer::find()->one();
        $vacancies = Vacancies::find()->where(['published'=>1])->all();

        $post = \Yii::$app->request->post('FormCallback');

        if (Yii::$app->request->isPost) {
            $dir = Yii::getAlias('@frontendWeb/career');
            $file = UploadedFile::getInstance($model, 'file');
            $imageName = uniqid();
            $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
            $model->file = '/career/' . $imageName . '.' . $file->extension;

            $model->sendEmail($post, $model->file, 'Кар\'єра');
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view',
                    'text' => $text,
                    'vacancies' => $vacancies,
                    'model' => $model
                ]);
            }
        } else {
            $model->loadDefaultValues();
        }

      return  $this->render('view',['text' => $text, 'vacancies' => $vacancies, 'model' => $model]);
    }

}