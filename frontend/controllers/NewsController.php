<?php


namespace frontend\controllers;

use Codeception\PHPUnit\Constraint\Page;
use common\models\Category;
use common\models\News;
use common\models\NewsCategory;
use common\models\Pages;
use Yii;
use yii\data\Pagination;
use yii\helpers\VarDumper;
use \yii\web\Controller;

class NewsController extends Controller
{
    public function actionView($slug = null)
    {
//        $url = Yii::$app->request->pathInfo;

        $get = Yii::$app->request->get();
        if($slug === null){
            $url = Yii::$app->request->pathInfo;
            $slug = explode('/', $url);
            $slug = $slug[0];
        }

        $lang = \Yii::$app->session->get('_language');
        $pagination_btn = 'Завантажити ще';
        if($lang === 'ru') {
            $pagination_btn = "Скачать еще";
        }elseif ($lang === 'en'){
            $pagination_btn = "Download more";
        }

        if($slug === 'articles'){
            $categories = NewsCategory::find()
                ->where(['parent_id' => 1])
                ->all();
        }
        $category = NewsCategory::find()
            ->with(['parents'])
            ->where(['slug' => $slug])
            ->one();

        $tabs = NewsCategory::getTabNews($slug);

        if(isset($category->parents) && $category->parents){
            $cat_ids = [];
            foreach ($category->parents as $parent){
                $cat_ids[] = $parent->id;
            }
        }elseif($slug === 'articles'){
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

        $news = News::find()
            ->where(['category_id' => $cat_ids, 'published' => 1])
            ->orderBy('created_at DESC')
            ->limit($count)
            ->all();
//        VarDumper::dump($news, 10, true);
//        die;
        if (Yii::$app->request->isAjax) {
            Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            return $this->renderAjax('view', [
                'tabs' => $tabs,
                'news' => $news,
                'category' => $category,
//            'pages' => $pages,
                'pagination_btn' => $pagination_btn,
            ]);
        }
        return $this->render('view', [
            'tabs' => $tabs,
            'news' => $news,
            'category' => $category,
//            'pages' => $pages,
            'pagination_btn' => $pagination_btn,
        ]);
    }

    public function actionItem($slug){

        $new = News::find()->where(['slug' => $slug])->one();

//        VarDumper::dump($new, 10, true);
//        die;

        $meta = \Yii::$app->metamaster->setTitle($new->getTitle($new->id));
        $meta->setDescription($new->getDescr($new->id));
        if(file_exists(Yii::getAlias('@frontend/web/' . $new->image_og))){
            $meta->setImage($new->image_og);
        }elseif(file_exists(Yii::getAlias('@frontend/web/' . $new->image))){
            $meta->setImage($new->image);
        }
        $meta->register(Yii::$app->getView());

        return $this->render('item',[
            'new' => $new,
        ]);

    }
    public function actionPagination($page){
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

        return $page;

    }
}