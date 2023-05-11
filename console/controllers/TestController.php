<?php

namespace console\controllers;


use common\models\Category;
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
        $send_email = \Yii::$app
            ->mailer
            ->compose()
            ->setFrom('igorkri26@gmail.com')
            ->setTo('service@masterok.pl.ua')
            ->setSubject('test email iknet')
            ->setTextBody("Test message");

        if($send_email->send()){
            echo "\n Send message \n";
        }else{
           print_r($send_email);

        }


//        Yii::$app->mailer->compose()
//            ->setTo("igorkri26@gmail.gom") // кому
//            ->setFrom([Yii::$app->params['senderEmail']]) // від кого
////            ->setReplyTo([$this->email => $this->name])
//            ->setSubject('test email')
//            ->setTextBody("Test message")
//            ->send();
    }
}
