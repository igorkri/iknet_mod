<?php


namespace frontend\widgets;

use common\models\ProjectCategory;
use yii\base\Widget;

class Projects extends Widget
{

    public function init()
    {
        parent::init();

    }

    public function run()
    {

        $projects = ProjectCategory::find()->where(['id' => [12,13]])->all();
        return $this->render('projects', compact('projects'));
    }


}
