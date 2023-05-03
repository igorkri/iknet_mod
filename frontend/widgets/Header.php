<?php


namespace frontend\widgets;

use common\models\Menu;
use yii\base\Widget;
use yii\helpers\VarDumper;

class Header extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {
        $menus = Menu::getList();
        $lang = \Yii::$app->session->get('_language');

        $search = "Пошук";
        if($lang === 'ru') {
            $search = "Поиск";
        }elseif ($lang === 'en'){
            $search = "Search";
        }

        return $this->render('header',[
            'menus'=>$menus,
            'lang' => $lang,
            'search' => $search
        ]);
    }


}
