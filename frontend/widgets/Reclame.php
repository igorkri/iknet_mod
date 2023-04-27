<?php


namespace frontend\widgets;

use yii\base\Widget;

class Reclame extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        return $this->render('reclame');
    }


}
