<?php


namespace frontend\widgets;

use common\models\ClientsBrand;
use yii\base\Widget;

class OurClients extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        $lang = \Yii::$app->session->get('_language');
        $img = '';
        if($lang == 'ru'){
            $img = '/img/our_clients(RU).svg';
        }elseif($lang == 'en'){
            $img = '/img/our_clients(EN).svg';
        }else{
            $img = '/img/our_clients(UA).svg';
        }

        $cliennts = ClientsBrand::find()->where(['published' => 1])->orderBy('order ASC')->all();

        return $this->render('our-clients', [
            'cliennts' => $cliennts,
            'img' => $img,
        ]);
    }


}
