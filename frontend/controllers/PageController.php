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

        $meta = \Yii::$app->metamaster->setTitle($new->getTitle($new->id));
        $meta->setDescription($new->getDescr($new->id));
        if(file_exists(\Yii::getAlias('@frontend/web/' . $new->image_og))){
            $meta->setImage($new->image_og);
        }elseif(file_exists(\Yii::getAlias('@frontend/web/' . $new->image))){
            $meta->setImage($new->image);
        }
        $meta->register(\Yii::$app->getView());

        return $this->render('article', [
            'new' => $new,
        ]);

    }


}
