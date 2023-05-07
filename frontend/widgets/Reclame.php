<?php


namespace frontend\widgets;

use common\models\Reclaimed;
use yii\base\Widget;

class Reclame extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        $reclames = Reclaimed::find()->where(['published' => 1])->all();
        return $this->render('reclame', compact('reclames'));
    }


}
