<?php

namespace frontend\controllers;


use common\models\Category;
use common\models\News;
use common\models\Pages;
use yii\helpers\VarDumper;
use yii\web\Controller;

/**
 * Page controller
 */
class PageController extends Controller
{
    public function actionArticle($slug): string
    {

        $new = Pages::find()->where(['slug' => $slug])->one();

        return $this->render('article', [
            'new' => $new,
        ]);

    }


}
