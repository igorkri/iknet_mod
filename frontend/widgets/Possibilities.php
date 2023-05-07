<?php


namespace frontend\widgets;

use common\models\HomeSection;
use yii\base\Widget;

class Possibilities extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        $possibilitie = HomeSection::find()->with('tabs')->where(['id' => 1])->one();
        $connection = HomeSection::find()->with('tabs')->where(['id' => 2])->one();
        $energy_efficiency = HomeSection::find()->with('tabs')->where(['id' => 3])->one();

        return $this->render('possibilities', [
            'possibilitie' => $possibilitie,
            'connection' => $connection,
            'energy_efficiency' => $energy_efficiency,
        ]);
    }


}