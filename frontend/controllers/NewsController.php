<?php


namespace frontend\controllers;

use common\models\Pages;
use \yii\web\Controller;

class NewsController extends Controller
{
    public function actionView()
    {
        $news = Pages::find()
            ->where([
                'category_id' => 1,
                'published' => 1,
            ])
            ->all();


        return $this->render('view',['news' => $news]);
    }
}