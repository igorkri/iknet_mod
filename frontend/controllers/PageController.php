<?php

namespace frontend\controllers;


use common\models\Category;
use common\models\Pages;
use yii\helpers\VarDumper;
use yii\web\Controller;

/**
 * Page controller
 */
class PageController extends Controller
{
    public function actionArticle($slug): string
    {


        $lang = \Yii::$app->session->get('_language');
        $categories = Category::find()->with('parents')->where(['slug' => $slug])->all();
        if($categories != null){
            $categories = Category::find()->with('parents2')->where(['slug' => $slug])->all();
        }
        $cat_ids = [];
        foreach ($categories as $category){
            $cat_ids[] = $category->id;
//            if($category->parents){
//                foreach ($category->parents as $parent){
//                    $cat_ids[] = $parent->id;
//                }
//            }
        }

        $posts = Pages::find()->where(['category_id' => $cat_ids])->all();
//        VarDumper::dump($categories, 10, true);
//        die;
        return $this->render('article', [
            'posts' => $posts,
            'categories' => $categories,
            'lang' => $lang,
        ]);

    }


}
