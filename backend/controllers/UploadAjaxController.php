<?php

namespace backend\controllers;

use backend\models\UploadFile;
use common\models\Pages;
use common\models\search\PagesSearch;
use Yii;
use yii\helpers\VarDumper;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\Response;
use yii\web\UploadedFile;

/**
 * PageController implements the CRUD actions for Pages model.
 */
class UploadAjaxController extends Controller
{
    public function beforeAction($action) {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }

    public function actionUploadImg(){
//        Yii::$app->response->format = Response::FORMAT_JSON;
        $model = new UploadFile();
//        if(Yii::$app->request->isPost){
            $dir = Yii::getAlias('@frontendWeb/img/posts');
            $file = UploadedFile::getInstance($model, 'file');
            VarDumper::dump($file, 10, true);
            die;
            $imageName = uniqid();
//            $file->saveAs($dir . '/' . $imageName . '.' . $file->extension);
            $file->saveAs($dir . '/' . $imageName . '.png');
//            $imageName . '.' . $file->extension;

//        }
    }

}
