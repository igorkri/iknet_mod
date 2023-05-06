<?php


namespace frontend\widgets;

use common\models\Contacts;
use yii\base\Widget;

class Footer extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {
        $contact = Contacts::find()->one();

        return $this->render('footer', [
            'contact' => $contact
        ]);
    }


}
