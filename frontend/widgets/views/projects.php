<?php

$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
    $img_projects =  '/img/project_ru.png';

}elseif($lang == 'en'){
    $img_projects =  '/img/project_en.png';

}else{
    $img_projects =  '/img/project.png';

}

?>

<section class="projects">
    <div class="block">
        <img src="<?= $img_projects ?>" alt="" class="projects_img">
        <div class="projects_container">
            <?php use yii\helpers\Url;

            if($projects): ?>
                <?php foreach($projects as $project): ?>
                    <?php if($project->id == 12): ?>
                        <a href="<?=Url::to(['projects/companys-projects'])?>">
                            <div>
                                <img src="/img/project_1.webp" alt="">
                            </div>
                            <h3><?=$project->getTitle($project->id)?></h3>
                        </a>
                    <?php else: ?>
                        <a href="<?=Url::to(['projects/projects-for-sale'])?>">
                            <div>
                                <img src="/img/project_2.webp" alt="">
                            </div>
                            <h3><?=$project->getTitle($project->id)?></h3>
                        </a>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
</section>
