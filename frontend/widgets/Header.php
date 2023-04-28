<?php


namespace frontend\widgets;

use common\models\Menu;
use yii\base\Widget;

class Header extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {
        $menus = Menu::find()
            ->where(['published' => 1])
            ->orderBy('order')
            ->all();

      //  exit('<pre>'.print_r($menus,true).'</pre>');

        return $this->render('header',['menus'=>$menus]);
    }


}
