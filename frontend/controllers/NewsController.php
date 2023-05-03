<?php


namespace frontend\controllers;

use Codeception\PHPUnit\Constraint\Page;
use common\models\Category;
use common\models\Pages;
use yii\helpers\VarDumper;
use \yii\web\Controller;

class NewsController extends Controller
{
    public function actionView($slug = null)
    {

        $tabs = Category::getTab();
//        VarDumper::dump($tabs, 10,true);
//        die;
        if($slug == null){
            $category = Category::find()
                ->with(['parents'])
                ->where(['id' => 1])
                ->one();
        }else{
            $category = Category::find()
                ->with(['parents'])
                ->where(['slug' => $slug])
//                ->asArray()
                ->one();
        }
        if($category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
            array_push($cat_ids, 1,2);
        }else{
            $cat_ids[] = $category->id;
        }
        $news = Pages::find()
            ->where([
                'category_id' => $cat_ids,
                'published' => 1,
            ])
            ->all();

        return $this->render('view',[
            'news' => $news,
            'category' => $category,
            'tabs' => $tabs
        ]);
    }

    public function actionItem($slug){

        $new = Pages::find()->where(['slug' => $slug])->one();

        return $this->render('item',[
            'new' => $new,
        ]);

    }
}