<?php


namespace frontend\controllers;

use common\models\About;
use common\models\News;
use common\models\Pages;
use common\models\Projects;
use common\models\Reviews;
use yii\helpers\VarDumper;
use \yii\web\Controller;


class SearchController extends Controller
{
    public function actionIndex($q = null)
    {
        $lang = \Yii::$app->session->get('_language');
        $result = [];
        if($q) {
            $pages = Pages::find()
                ->select(['id, CONCAT("/page/article/", slug) AS slug, created_at, title_uk, title_en, title_ru, image, SUBSTRING(text_ru, 1, 600) as text_ru, SUBSTRING(text_uk, 1, 600) as text_uk, SUBSTRING(text_en, 1, 600) as text_en'])
                ->where(['like', 'title_uk', $q])
                ->orWhere(['like', 'title_en', $q])
                ->orWhere(['like', 'title_ru', $q])
                ->andWhere(['published' => 1])
                ->limit(100)
                ->all();
            $news = News::find()
                ->select(['id, CONCAT("/news/item/", slug) as slug, created_at, title_uk, title_en, title_ru, image, SUBSTRING(text_ru, 1, 600) as text_ru, SUBSTRING(text_uk, 1, 600) as text_uk, SUBSTRING(text_en, 1, 600) as text_en'])
                ->where(['like', 'title_uk', $q])
                ->orWhere(['like', 'title_en', $q])
                ->orWhere(['like', 'title_ru', $q])
                ->andWhere(['published' => 1])
                ->limit(100)
                ->all();
            $projects = Projects::find()
                ->select(['id, CONCAT("/projects/view/", slug) as slug, created_at, title_uk, title_en, title_ru, image, SUBSTRING(text_ru, 1, 600) as text_ru, SUBSTRING(text_uk, 1, 600) as text_uk, SUBSTRING(text_en, 1, 600) as text_en'])
                ->where(['like', 'title_uk', $q])
                ->orWhere(['like', 'title_en', $q])
                ->orWhere(['like', 'title_ru', $q])
                ->andWhere(['published' => 1])
                ->limit(100)
                ->all();
            $result = array_merge_recursive($pages, $news, $projects);
//            VarDumper::dump($result, 10, true);
//            die;
        }
        return $this->render('index',[
            'pages' => $result,
        ]);
    }

    public function actionView($slug){

        $page = Pages::find()
            ->where(['slug' => $slug])
            ->one();
        if($page){
            return $this->redirect(['/page/article', 'slug' => $slug]);
        }

        $new = News::find()
            ->where(['slug' => $slug])
            ->one();
        if($new){
            return $this->redirect(['/news/item', 'slug' => $slug]);
        }

        $project = Projects::find()
            ->where(['slug' => $slug])
            ->one();
        if($project){
            return $this->redirect(['/projects/view', 'slug' => $slug]);
        }

    }
}