<?php

namespace backend\controllers;

use common\models\HomeTabs;
use common\models\News;
use common\models\Pages;
use common\models\Projects;
use common\models\search\HomeTabsSearch;
use Statickidz\GoogleTranslate;
use yii\helpers\VarDumper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\Response;

/**
 * HomeTabsController implements the CRUD actions for HomeTabs model.
 */
class HomeTabsController extends Controller
{
    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],
            ]
        );
    }

    /**
     * Lists all HomeTabs models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new HomeTabsSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single HomeTabs model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new HomeTabs model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new HomeTabs();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing HomeTabs model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing HomeTabs model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the HomeTabs model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return HomeTabs the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = HomeTabs::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionSearhPage($q){
        //        $this->enableCsrfValidation = false;
        $out = ['results' => ['id' => '', 'title_uk' => '', 'title_en' => '', 'title_ru' => '', 'slug' => '']];
        if (!is_null($q)) {
            $pages = Pages::find()
                ->select(['id', 'CONCAT("/page/article/", slug) as slug', 'created_at', 'title_uk', 'title_en', 'title_ru'])
                ->where(['like', 'title_uk', $q])
                ->orWhere(['like', 'title_en', $q])
                ->orWhere(['like', 'title_ru', $q])
                ->andWhere(['published' => 1])
                ->asArray()
                ->limit(100)
                ->all();
            $news = News::find()
                ->select(['id', 'CONCAT("/news/item/", slug) as slug', 'created_at', 'title_uk', 'title_en', 'title_ru'])
                ->where(['like', 'title_uk', $q])
                ->orWhere(['like', 'title_en', $q])
                ->orWhere(['like', 'title_ru', $q])
                ->andWhere(['published' => 1])
                ->limit(100)
                ->asArray()
                ->all();
            $projects = Projects::find()
                ->select(['id', 'CONCAT("/projects/view/", slug) as slug', 'created_at', 'title_uk', 'title_en', 'title_ru'])
                ->where(['like', 'title_uk', $q])
                ->orWhere(['like', 'title_en', $q])
                ->orWhere(['like', 'title_ru', $q])
                ->andWhere(['published' => 1])
                ->limit(100)
                ->asArray()
                ->all();
            $result = array_merge_recursive($pages, $news, $projects);
//            VarDumper::dump($result, 10, true);
//            die;
            $arrs = [];
            foreach ($result as $value) {
                $arr = [];
                $arr['slug'] = $value['slug'];
                $arr['title_uk'] = $value['title_uk'];
                $arr['title_ru'] = $value['title_ru'];
                $arr['title_en'] = $value['title_en'];
                $arr['id'] = $value['slug'];

                $arrs[] = $arr;
            }
            $out['results'] = $arrs;
        } else {
            $out['results'] = ['id' => '', 'title_uk' => '', 'title_en' => '', 'title_ru' => '', 'slug' => ''];
        }
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return $out;
    }

    public function actionSearchResName($slug){
        \Yii::$app->response->format = Response::FORMAT_JSON;
        $param = explode('/', $slug);
//        VarDumper::dump($param, 10, true);
//        die;
        if($param[1] === 'page'){
            $page = Pages::find()
                ->where(['slug' => $param[3]])
                ->one();

            return $page->title_uk;
        }
        if($param[1] === 'news'){
            $page = News::find()
                ->where(['slug' => $param[3]])
                ->one();

            return $page->title_uk;
        }
        if($param[1] === 'projects'){
            $page = Projects::find()
                ->where(['slug' => $param[3]])
                ->one();

            return $page->title_uk;
        }
    }

    public function actionTranslate($lang, $title, $text = null){
        \Yii::$app->response->format = Response::FORMAT_JSON;
        $source = 'uk';
        $target = $lang;

        $trans = new GoogleTranslate();
        $result = [];
        if($title){
            $result['title'] = $trans->translate($source, $target, $title);
            $result['lang'] = $lang;
        }
        if($text){
            $result['text'] = $trans->translate($source, $target, $text);
        }
        return $result;
    }
}
