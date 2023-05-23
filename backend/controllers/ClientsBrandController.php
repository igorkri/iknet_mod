<?php

namespace backend\controllers;

use common\models\PresentsEnergyList;
use common\models\search\ClientsBrandSearch;
use common\models\ClientsBrand;
use Yii;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * ClientsBrandController implements the CRUD actions for ClientsBrand model.
 */
class ClientsBrandController extends Controller
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
     * Lists all ClientsBrand models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new ClientsBrandSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single ClientsBrand model.
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
     * Creates a new ClientsBrand model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new ClientsBrand();

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $dir = Yii::getAlias('@frontendWeb/images/client-brand');
                $file = UploadedFile::getInstance($model, 'file');
                if (isset($file)) {
                    $imageName = uniqid();
                    $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                    $model->file = $imageName . '.' . $file->extension;
                }
                if ($model->save()) {
                    return $this->redirect('index');
                } else {
                    return $this->redirect(['update', 'id' => $model->id]);
                }
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing ClientsBrand model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post())) {
            $post_file = $_FILES['ClientsBrand']['size']['file'];
            if ($post_file <= 0) {
                $old = $this->findModel($id);
                $model->file = $old->file;
            } else {
                $dir = Yii::getAlias('@frontendWeb/images/client-brand');
                $file = UploadedFile::getInstance($model, 'file');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->file = $imageName . '.' . $file->extension;
            }
            if ($model->save()) {
                return $this->redirect('index');
//                return $this->redirect(['view', 'id' => $model->id]);
            } else {
                return $this->redirect(['update', 'id' => $model->id]);
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing ClientsBrand model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        $dir = Yii::getAlias('@app/web/images/client-brand');
        if (file_exists($dir . $model->file) and !empty($model->file)) {
            unlink($dir . "/" . $model->file);
        }
            $model->delete();
        return $this->redirect(['index']);
    }

    /**
     * Finds the ClientsBrand model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return ClientsBrand the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = ClientsBrand::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionSorting(){
        Yii::$app->cache->flush();
        $post_sort_arrs = Yii::$app->request->post('sorting');
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        if($post_sort_arrs){
            foreach ($post_sort_arrs as $key_sort => $id){
                $sort = ClientsBrand::find()->where(['id' => $id])->one();
                $sort->order = $key_sort;
                if($sort->save()){

                }else{
                    print_r($sort->errors);
                    die;
                }
            }
        }
        return true;
    }
}
