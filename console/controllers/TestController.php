<?php

namespace console\controllers;


use common\models\Category;
use common\models\FormCallback;
use common\models\Menu;
use common\models\News;
use common\models\NewsCategory;
use common\models\Pages;
use common\models\ProjectCategory;
use common\models\Projects;
use common\models\System;
use Yii;
use yii\base\BaseObject;
use yii\console\Controller;
use yii\db\Query;

/**
 * Site controller
 */
class TestController extends Controller
{
    public function actionEmail(){

        $model = new FormCallback();
        $send_email = $model->sendEmail(true);

        if($send_email){
            echo "\n Send message \n";
        }else{
           print_r($send_email);

        }

    }
}
