<?php


namespace frontend\controllers;


class ProjectsController extends \yii\web\Controller
{
    public function actionsView()
    {
        return $this->render('view');
    }

    public function actionsProjectsCompani()
    {
        return $this->render('project-compani');
    }

    public function actionsProjectsForSale()
    {
        return $this->render('projects-for-sale');
    }
}