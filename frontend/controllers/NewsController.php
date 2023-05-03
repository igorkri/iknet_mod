<?php


namespace frontend\controllers;

use common\models\Category;
use common\models\Pages;
use yii\helpers\VarDumper;
use \yii\web\Controller;

class NewsController extends Controller
{
    public function actionView()
    {
        $category = Category::find()
            ->with(['parents'])
            ->where(['id' => 1])
//            ->where(['category_id' => 2])
//            ->asArray()
            ->one();
        $cat_ids = [];
        foreach ($category->parents as $parent){
            $cat_ids[] = $parent->id;
        }
        array_push($cat_ids, 1,2);
//        VarDumper::dump($cat_ids, 10, true);
//        die;
        $news = Pages::find()
            ->where([
                'category_id' => $cat_ids,
                'published' => 1,
            ])
            ->all();


        return $this->render('view',[
            'news' => $news,
            'category' => $category
        ]);
    }
}