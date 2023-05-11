<?php


namespace frontend\widgets;

use common\models\FormCallback;
use yii\base\BaseObject;
use yii\base\Widget;

class ContactUs extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {
        $model = new FormCallback();

        return $this->render('contact-us', [
            'model' => $model
        ]);
    }


}
