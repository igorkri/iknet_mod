<?php


namespace frontend\widgets;

use yii\base\Widget;

class News extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        $news = \common\models\News::find()
            ->where(['published' => 1])
            ->andWhere(['IS NOT', 'image', NULL ])
            ->orWhere(['IS NOT', 'image_og', NULL ])
            ->limit(20)
            ->orderBy('created_at DESC')->all();

        return $this->render('news', compact('news'));
    }


}