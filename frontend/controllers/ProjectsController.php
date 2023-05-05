<?php


namespace frontend\controllers;


use common\models\Category;
use common\models\ProjectCategory;
use common\models\Projects;
use Yii;
use yii\base\BaseObject;
use yii\data\Pagination;
use yii\helpers\VarDumper;

class ProjectsController extends \yii\web\Controller
{
    public function actionView($slug)
    {
        $new = Projects::find()->where(['slug' => $slug])->one();

//        \yii\helpers\VarDumper::dump($slug, 10, true);
//        \yii\helpers\VarDumper::dump($new, 10, true);
//        die;

        return $this->render('view',[
            'new' => $new,
        ]);
    }

    public function actionCompanysProjects($slug = null)
    {
        $get = Yii::$app->request->get();
        if($slug === null){
            $url = Yii::$app->request->pathInfo;
            $slug = explode('/', $url);
            $slug = $slug[1];
        }

        $lang = \Yii::$app->session->get('_language');
        $pagination_btn = 'Завантажити ще';
        if($lang === 'ru') {
            $pagination_btn = "Скачать еще";
        }elseif ($lang === 'en'){
            $pagination_btn = "Download more";
        }

        if($slug === 'all_projects'){
            $categories = ProjectCategory::find()
                ->where(['parent_id' => 12])
                ->all();
        }
        $category = ProjectCategory::find()
            ->with(['parents'])
            ->where(['slug' => $slug])
            ->one();

        $tabs = ProjectCategory::getTabProject($slug);

        if(isset($category->parents) && $category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }elseif($slug === 'all_projects'){
            foreach ($categories as $c){
                $cat_ids[] = $c->id;
            }
        }else{
            $cat_ids[] = $category->id;
        }
        $count = 5;
        if(isset($get['page'])){
            $count = intval($get['page']) * 5;
        }

        $news = Projects::find()->where(['category_id' => $cat_ids, 'published' => 1])
            ->orderBy('created_at DESC')
            ->limit($count)
            ->all();


        return $this->render('projects-compani', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category,
            'pagination_btn' => $pagination_btn,
        ]);
    }

    public function actionProjectsForSale($slug = null)
    {
        if($slug === null){
            $url = Yii::$app->request->pathInfo;
            $slug = explode('/', $url);
            $slug = $slug[1];
        }
        $lang = \Yii::$app->session->get('_language');
        $pagination_btn = 'Завантажити ще';
        if($lang === 'ru') {
            $pagination_btn = "Скачать еще";
        }elseif ($lang === 'en'){
            $pagination_btn = "Download more";
        }


        if($slug === 'vsi-proekti'){
            $categories = ProjectCategory::find()
                ->where(['parent_id' => 12])
                ->all();
        }
        $category = ProjectCategory::find()
            ->with(['parents'])
            ->where(['slug' => $slug])
            ->one();

        $tabs = ProjectCategory::getTabProject($slug);

        if(isset($category->parents) && $category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }elseif($slug === 'vsi-proekti'){
            foreach ($categories as $c){
                $cat_ids[] = $c->id;
            }
        }else{
            $cat_ids[] = $category->id;
        }

        $count = 5;
        if(isset($get['page'])){
            $count = intval($get['page']) * 5;
        }

        $news = Projects::find()->where(['category_id' => $cat_ids, 'published' => 1])
            ->orderBy('created_at DESC')
            ->limit($count)
            ->all();


        return $this->render('projects-for-sale', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category,
            'pagination_btn' => $pagination_btn
        ]);
    }
}