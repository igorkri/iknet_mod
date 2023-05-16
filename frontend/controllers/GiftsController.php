<?php


namespace frontend\controllers;

use common\models\FormCallback;
use common\models\PresentsEnergy;
use common\models\PresentsEnergyList;
use common\models\PresentsEnergyListImg;
use Yii;
use yii\base\BaseObject;
use yii\helpers\VarDumper;
use \yii\web\Controller;
use yii\web\Response;


class GiftsController extends Controller
{
    public function actionView()
    {

        $model = new FormCallback();
        $item = PresentsEnergy::find()->one();
        $presents = PresentsEnergyList::find()->with('img')->orderBy('order ASC')->all();
        $post = \Yii::$app->request->post('FormCallback');

        if (Yii::$app->request->isPost) {
            $model->sendEmail($post, null, 'Подарунки енергетикам');
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view',
                    'item'=>$item,
                    'presents'=>$presents,
                    'model' => $model
                ]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return  $this->render('view',[
            'item'=>$item,
            'presents'=>$presents,
            'model' => $model
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