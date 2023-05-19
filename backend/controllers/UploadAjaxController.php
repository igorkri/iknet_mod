<?php

namespace backend\controllers;

use backend\models\UploadFile;
use common\models\News;
use common\models\Pages;
use common\models\PresentsEnergyListImg;
use common\models\Projects;
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
    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }

    public function actionUploadImg()
    {
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

    public function actionRemoveImg($page, $file, $field)
    {
        $file = str_replace('%2F', '/', $file);
        $dir = Yii::getAlias('@frontendWeb');
        Yii::$app->response->format = Response::FORMAT_JSON;
        if (file_exists($dir . $file)) {
            if ($page == 'news') {
                $new = News::find()->where([$field => $file])->one();
                $new->$field = null;
                if ($new->save()) {
                    unlink($dir . $file);
                    return true;
                }
            } elseif ($page == 'projects') {
                $new = Projects::find()->where([$field => $file])->one();
                $new->$field = null;
                if ($new->save()) {
                    unlink($dir . $file);
                    return true;
                }
            } elseif ($page == 'posts') {
                $new = Pages::find()->where([$field => $file])->one();
                $new->$field = null;
                if ($new->save()) {
                    unlink($dir . $file);
                    return true;
                }
            } elseif ($page == 'presents-list') {
                $new = PresentsEnergyListImg::find()->where([$field => $file])->one();
                $new->$field = null;
                if ($new->save()) {
                    unlink($dir . $file);
                    return true;
                }
            }

            return false;

        }
    }
}
