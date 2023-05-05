<?php

namespace backend\controllers;

use common\models\Contacts;
use common\models\search\ContactsSearch;
use Yii;
use yii\base\BaseObject;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * ContactsController implements the CRUD actions for Contacts model.
 */
class ContactsController extends Controller
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
     * Lists all Contacts models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new ContactsSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Contacts model.
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
     * Creates a new Contacts model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */

    public function actionCreate()
    {
        $model = new Contacts();
        $dir = Yii::getAlias('@frontendWeb/img/contacts');

        if ($model->load($this->request->post())) {
            if($_FILES and $_FILES['Contacts']['size']['image_uk'] > 0) {
                $file_uk = UploadedFile::getInstance($model, 'image_uk');
                $imageName_uk = uniqid();
                $file_uk->saveAs($dir . '/' . $imageName_uk . '.' . $file_uk->extension);
                $model->image_uk = '/img/contacts/' . $imageName_uk . '.' . $file_uk->extension;
            }
            if($_FILES and $_FILES['Contacts']['size']['image_en'] > 0) {
                $file_en = UploadedFile::getInstance($model, 'image_en');
                $imageName_en = uniqid();
                $file_en->saveAs($dir . '/' . $imageName_en . '.' . $file_en->extension);
                $model->image_en = '/img/contacts/' . $imageName_en . '.' . $file_en->extension;
            }
            if($_FILES and $_FILES['Contacts']['size']['image_ru'] > 0) {
                $file_ru = UploadedFile::getInstance($model, 'image_ru');
                $imageName_ru = uniqid();
                $file_ru->saveAs($dir . '/' . $imageName_ru . '.' . $file_ru->extension);
                $model->image_ru = '/img/contacts/' . $imageName_ru . '.' . $file_ru->extension;
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
     * Updates an existing Contacts model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */

    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $dir = Yii::getAlias('@frontendWeb/img/contacts');

        if ($model->load($this->request->post())) {

            if($_FILES and $_FILES['Contacts']['size']['image_uk'] > 0) {
                $file = UploadedFile::getInstance($model, 'image_uk');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image_uk = '/img/contacts/' . $imageName . '.' . $file->extension;
            }

            if($_FILES and $_FILES['Contacts']['size']['image_en'] > 0) {
                $file = UploadedFile::getInstance($model, 'image_en');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image_en = '/img/contacts/' . $imageName . '.' . $file->extension;
            }

            if($_FILES and $_FILES['Contacts']['size']['image_ru'] > 0) {
                $file = UploadedFile::getInstance($model, 'image_ru');
                $imageName = uniqid();
                $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
                $model->image_ru = '/img/contacts/' . $imageName . '.' . $file->extension;
            }
        }
        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);

        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Contacts model.
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
     * Finds the Contacts model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Contacts the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Contacts::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException(Yii::t('app', 'The requested page does not exist.'));
    }
}
