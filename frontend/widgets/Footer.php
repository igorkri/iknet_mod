<?php


namespace frontend\widgets;

use common\models\Contacts;
use common\models\Menu;
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
        $site_map = Menu::find()
            ->where(['id' => [1,2,7,13,21,28]])
            ->all();
        $services = Menu::find()
            ->where(['id' => [7,13]])
            ->all();

        return $this->render('footer', [
            'contact' => $contact,
            'site_map' => $site_map,
            'services' => $services
        ]);
    }


}
