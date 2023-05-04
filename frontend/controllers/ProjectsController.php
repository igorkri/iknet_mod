<?php


namespace frontend\controllers;


use common\models\Category;
use common\models\Pages;
use Yii;
use yii\helpers\VarDumper;

class ProjectsController extends \yii\web\Controller
{
    public function actionView($slug)
    {
        $new = Pages::find()->where(['slug' => $slug])->one();

        return $this->render('view',[
            'new' => $new,
        ]);
    }

    public function actionCompanysProjects()
    {
        $url = Yii::$app->request->pathInfo;
        $slug = explode('/', $url);
        $tabs = Category::getTabProject($slug[1]);
        if($slug == null){
            $category = Category::find()
                ->with(['parents'])
                ->where(['id' => 1])
                ->one();
        }else{
            $category = Category::find()
                ->with(['parents'])
                ->where(['slug' => $slug[1]])
//                ->asArray()
                ->one();
        }
        if($category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }else{
            $cat_ids[] = $category->id;
        }
        $news = Pages::find()
            ->where([
                'category_id' => $cat_ids,
                'published' => 1,
            ])
            ->all();

//        VarDumper::dump($tabs, 10, true);
//        die;

        return $this->render('projects-compani', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category
        ]);
    }

    public function actionProjectsForSale($slug = null)
    {
        $url = Yii::$app->request->pathInfo;
        $slugTab = explode('/', $url);

        $tabs = Category::getTabProject($slugTab[1]);
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

        if(isset($category->parents)){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }else{
            $cat_ids[] = $category->id;
        }
        $news = Pages::find()
            ->where([
                'category_id' => $cat_ids,
                'published' => 1,
            ])
            ->all();

        return $this->render('projects-for-sale', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category
        ]);
    }
}