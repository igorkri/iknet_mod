<?php

namespace backend\controllers;

use common\models\Menu;
use common\models\search\PresentsEnergyListSearch;
use common\models\PresentsEnergyList;
use common\models\PresentsEnergyListImg;

use Yii;
use yii\base\BaseObject;
use yii\helpers\VarDumper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\Response;
use yii\web\UploadedFile;

/**
 * PresentsEnergyListController implements the CRUD actions for PresentsEnergyList model.
 */
class PresentsEnergyListController extends Controller
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
     * Lists all PresentsEnergyList models.
     *
     * @return string
     */
    public function actionIndex()
    {
        Yii::$app->cache->flush();
        $searchModel = new PresentsEnergyListSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);


        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single PresentsEnergyList model.
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
     * Creates a new PresentsEnergyList model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new PresentsEnergyList();
        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['create-img',
                    'id' => $model->id,

                ]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing PresentsEnergyList model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            \Yii::$app->session->setFlash('success', 'Успішно оновлено');
            return $this->render('update', [
                'model' => $model,
            ]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing PresentsEnergyList model.
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
     * Finds the PresentsEnergyList model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return PresentsEnergyList the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = PresentsEnergyList::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionCreateImg($id){
        $is_images = PresentsEnergyListImg::find()->where(['presents_energy_list_id' => $id])->all();
        $model = new PresentsEnergyListImg();
        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                $dir = Yii::getAlias('@frontendWeb/images/presents-list');
                foreach (UploadedFile::getInstances($model, 'file') as $file) {
                    $model = new PresentsEnergyListImg();
                    $imageName = date('d-m-yy', time()) . '-' . uniqid();
                    $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                    $model->file = $imageName . '.' . $file->extension;
                    $model->presents_energy_list_id = $id;
                    if ($model->save()) {

                    }else{
                        print_r($model->errors);
                    }
                }
                if ($model->save()) {
                    return $this->redirect(['create-img',
                        'id' => $id,
                        'model' => $model,
                        'is_images' => $is_images
                    ]);

                }
            }
        }
        return $this->render('create-img', [
            'model' => $model,
            'is_images' => $is_images
        ]);
    }

    public function actionDeleteImg($id)
    {
        $model = PresentsEnergyListImg::findOne($id);
        Yii::$app->response->format = Response::FORMAT_JSON;
        if($model){
            $dir = Yii::getAlias('@frontendWeb/images/presents-list/');
            unlink($dir . $model->file);
            $model->delete();
            \Yii::$app->session->setFlash('success',  'Видалено');
            return $this->redirect(Yii::$app->request->referrer ?: Yii::$app->homeUrl);
        }

        return $this->render('create-img', [
            'model' => $model
        ]);
    }

    public function actionSorting(){
        Yii::$app->cache->flush();
        $post_sort_arrs = Yii::$app->request->post('sorting');
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        if($post_sort_arrs){
        foreach ($post_sort_arrs as $key_sort => $id){
            $sort = PresentsEnergyList::find()->where(['id' => $id])->one();
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
