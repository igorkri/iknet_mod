<?php


namespace frontend\controllers;


use common\models\Category;
use common\models\ProjectCategory;
use common\models\Projects;
use Yii;
use yii\helpers\VarDumper;

class ProjectsController extends \yii\web\Controller
{
    public function actionView($slug)
    {
        $new = Projects::find()->where(['slug' => $slug])->one();

        return $this->render('view',[
            'new' => $new,
        ]);
    }

    public function actionCompanysProjects($slug = null)
    {
        if($slug === null){
            $url = Yii::$app->request->pathInfo;
            $slug = explode('/', $url);
            $slug = $slug[1];
        }
        $category = ProjectCategory::find()
            ->with(['parents'])
            ->where(['slug' => $slug])
            ->one();

        $tabs = ProjectCategory::getTabProject($slug);

        if($category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }else{
            $cat_ids[] = $category->id;
        }

        $news = Projects::find()
            ->where([
                'category_id' => $cat_ids,
                'published' => 1,
            ])
            ->all();

        return $this->render('projects-compani', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category
        ]);
    }

    public function actionProjectsForSale($slug = null)
    {
        if($slug === null){
            $url = Yii::$app->request->pathInfo;
            $slug = explode('/', $url);
            $slug = $slug[1];
        }
        $category = ProjectCategory::find()
            ->with(['parents'])
            ->where(['slug' => $slug])
            ->one();

        $tabs = ProjectCategory::getTabProject($slug);

        if($category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }else{
            $cat_ids[] = $category->id;
        }
        $news = Projects::find()
            ->where([
                'category_id' => $cat_ids,
                'published' => 1,
            ])
            ->all();

//        VarDumper::dump($slug, 10, true);
//        VarDumper::dump($cat_ids, 10, true);
//        die;

        return $this->render('projects-compani', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category
        ]);
    }
}