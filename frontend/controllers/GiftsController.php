<?php


namespace frontend\controllers;

use common\models\PresentsEnergy;
use common\models\PresentsEnergyList;
use \yii\web\Controller;


class GiftsController extends Controller
{
    public function actionView()
    {
        $item = PresentsEnergy::find()->one();
        $presents = PresentsEnergyList::find()->all();

        return  $this->render('view',[
            'item'=>$item,
            'presents'=>$presents
        ]);
    }
}