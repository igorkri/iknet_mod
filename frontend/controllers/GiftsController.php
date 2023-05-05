<?php


namespace frontend\controllers;

use common\models\PresentsEnergy;
use \yii\web\Controller;


class GiftsController extends Controller
{
    public function actionView()
    {
        $item = PresentsEnergy::find()->one();

        return  $this->render('view',['item'=>$item]);
    }
}