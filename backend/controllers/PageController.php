<?php

namespace backend\controllers;

use common\models\Pages;
use common\models\search\PagesSearch;
use Yii;
use yii\base\BaseObject;
use yii\helpers\VarDumper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * PageController implements the CRUD actions for Pages model.
 */
class PageController extends Controller
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
     * Lists all Pages models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new PagesSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Pages model.
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
     * Creates a new Pages model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Pages();
        $dir = Yii::getAlias('@frontendWeb/img/posts');
        if ($model->load($this->request->post())) {
            if($_FILES and $_FILES['Pages']['size']['image'] > 0) {
                $file = UploadedFile::getInstance($model, 'image');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image = '/img/posts/' . $imageName . '.' . $file->extension;
            }

            if($_FILES and $_FILES['Pages']['size']['image_og'] > 0) {
                $file = UploadedFile::getInstance($model, 'image_og');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image_og = '/img/posts/' . $imageName . '.' . $file->extension;
            }
            if ($model->save()) {
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
     * Updates an existing Pages model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $dir = Yii::getAlias('@frontendWeb/img/posts');

        if ($model->load($this->request->post())) {
            $old_model = $this->findModel($id);
            if($_FILES and $_FILES['Pages']['size']['image'] > 0) {
                $file = UploadedFile::getInstance($model, 'image');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image = '/img/posts/' . $imageName . '.' . $file->extension;
            }else{
                $model->image = $old_model->image;
            }

            if($_FILES and $_FILES['Pages']['size']['image_og'] > 0) {
                $file = UploadedFile::getInstance($model, 'image_og');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image_og = '/img/posts/' . $imageName . '.' . $file->extension;
            }else{
                $model->image_og = $old_model->image_og;
            }
        }
        if ($this->request->isPost && $model->save(false)) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Pages model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $dir = Yii::getAlias('@frontendWeb');
        $model = $this->findModel($id);
        if (file_exists($dir . $model->image) and !empty($model->image)) {
            unlink($dir . $model->image);
        }
        if (file_exists($dir . $model->image_og) and !empty($model->image_og)) {
            unlink($dir . $model->image_og);
        }
        $model->delete();
        return $this->redirect(['index']);
    }

    /**
     * Finds the Pages model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Pages the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Pages::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionUploadImg(){
        $post = Yii::$app->request->post();
    }

}
