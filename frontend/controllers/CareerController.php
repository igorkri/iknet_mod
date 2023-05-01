<?php


namespace frontend\controllers;

use common\models\PageCareer;
use common\models\Vacancies;
use yii\web\Controller;


class CareerController extends Controller
{
    public function actionView()
    {
        $text = PageCareer::find()->one();
        $vacancies = Vacancies::find()->where(['published'=>1])->all();
      return  $this->render('view',['text' => $text, 'vacancies' => $vacancies]);
    }

}