<?php


namespace frontend\controllers;

use common\models\PresentsEnergy;
use common\models\PresentsEnergyList;
use common\models\PresentsEnergyListImg;
use Yii;
use yii\helpers\VarDumper;
use \yii\web\Controller;
use yii\web\Response;


class GiftsController extends Controller
{
    public function actionView()
    {
        $item = PresentsEnergy::find()->one();
        $presents = PresentsEnergyList::find()->with('img')->all();

        return  $this->render('view',[
            'item'=>$item,
            'presents'=>$presents
        ]);
    }

    public function actionImgGifts($id)
    {
        $request = Yii::$app->request;
        $models = PresentsEnergyListImg::find()->where(['presents_energy_list_id' => $id])->all();
        $img =  '';
        if($models) {
            foreach ($models as $model) {
                $img .= '<div class="item">';
                $img .= '<img src="/images/presents-list/' . $model->file . '" alt="">';
                $img .= '</div>';
            }
        }
        if ($request->isAjax) {
            Yii::$app->response->format = Response::FORMAT_JSON;
            return $img;
        }
        return false;
    }
}