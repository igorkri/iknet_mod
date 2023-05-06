<?php

namespace backend\controllers;

use common\models\ProjectCategory;
use common\models\search\ProjectCategorySearch;
use Yii;
use yii\base\BaseObject;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * ProjectCategoryController implements the CRUD actions for ProjectCategory model.
 */
class ProjectCategoryController extends Controller
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
     * Lists all ProjectCategory models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new ProjectCategorySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single ProjectCategory model.
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
     * Creates a new ProjectCategory model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new ProjectCategory();

        $dir = Yii::getAlias('@frontend/web/img/project_category');

        if ($this->request->isPost) {
            if ($model->load($this->request->post())) {
                if($_FILES and $_FILES['ProjectCategory']['size']['image'] > 0) {
                    $file = UploadedFile::getInstance($model, 'image');
                    $imageName = uniqid();
                    $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                    $model->image = '/img/project_category/' . $imageName . '.' . $file->extension;
                }
                if($model->save()) {
                    return $this->redirect(['view', 'id' => $model->id]);
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
     * Updates an existing ProjectCategory model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $dir = Yii::getAlias('@frontend/web/img/project_category');
        if ($model->load($this->request->post())) {
            $old_model = $this->findModel($id);

            if ($_FILES and $_FILES['ProjectCategory']['size']['image'] > 0) {
                $file = UploadedFile::getInstance($model, 'image');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image = '/img/project_category/' . $imageName . '.' . $file->extension;
            }else{
                $model->image = $old_model->image;
            }
            if ($this->request->isPost && $model->save(false)) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing ProjectCategory model.
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
     * Finds the ProjectCategory model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return ProjectCategory the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = ProjectCategory::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
