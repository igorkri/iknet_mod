<?php


namespace frontend\widgets;

use yii\base\Widget;

class ContactUs extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        return $this->render('contact-us');
    }


}
