<?php

namespace console\controllers;


use common\models\Category;
use common\models\Menu;
use common\models\News;
use common\models\NewsCategory;
use common\models\Pages;
use common\models\ProjectCategory;
use common\models\Projects;
use common\models\System;
use Yii;
use yii\base\BaseObject;
use yii\console\Controller;
use yii\db\Query;

/**
 * Site controller
 */
class ImportOldDbController extends Controller
{

    public function actionMenu()
    {
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

        $menus = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%menu}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();

        foreach ($menus as $menu) {
            $menu_translate = $original_db->createCommand(
                $Query->select('*')
                    ->from('{{%menu_translate}}')
                    ->where(['menu_id' => $menu['id']])
                    ->createCommand()
                    ->getRawSql()
            )->queryAll();
            $n_menu = new Menu();
            $n_menu->title_uk = $menu['title'];
            $n_menu->slug = $menu['url'];
            $n_menu->order = intval($menu['order']);
            $n_menu->published = intval($menu['published']);
            $n_menu->parent_id = $menu['parent'] ? intval($menu['parent']) : NULL;
            if (isset($menu_translate[0]['language_id']) == 2) {
                $n_menu->title_en = $menu_translate[0]['value'];
            } else {
                $n_menu->title_en = isset($menu_translate[1]['value']) ? $menu_translate[1]['value'] : '-';
            }
            if (isset($menu_translate[1]['language_id']) == 3) {
                $n_menu->title_ru = $menu_translate[1]['value'];
            } else {
                $n_menu->title_ru = isset($menu_translate[0]['value']) ? $menu_translate[0]['value'] : '-';
            }
            if ($n_menu->save()) {
                echo "\n Saved " . $n_menu->title_uk;
            } else {
                print_r($n_menu->errors);
            }

        }

    }

    public function actionCategory()
    {
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

        $page_categories = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%page_categories}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();

        $i = 1;
        foreach ($page_categories as $menu) {
            $categories_translate = $original_db->createCommand(
                $Query->select('*')
                    ->from('{{%page_categories_translate}}')
                    ->where(['category_id' => $menu['id']])
                    ->createCommand()
                    ->getRawSql()
            )->queryAll();

            $n_menu = new Category();
            $n_menu->id = $menu['id'];
            $n_menu->title_uk = $menu['name'];
            $n_menu->slug = $menu['uri'];
            $n_menu->order = intval($menu['order']);
            $n_menu->image = $menu['image'];
            $n_menu->seo_description_uk = $menu['html_description'];
            $n_menu->seo_keywords_uk = $menu['html_keywords'];
            $n_menu->parent_id = $menu['parent_id'] ? intval($menu['parent_id']) : NULL;
            $n_menu->published = 1;

            if (isset($categories_translate[0]['language_id']) == 2) {
                $n_menu->title_en = $categories_translate[0]['value'];
            } else {
                $n_menu->title_en = isset($categories_translate[1]['value']) ? $categories_translate[1]['value'] : '-';
            }
            if (isset($categories_translate[1]['language_id']) == 3) {
                $n_menu->title_ru = $categories_translate[1]['value'];
            } else {
                $n_menu->title_ru = isset($categories_translate[0]['value']) ? $categories_translate[0]['value'] : '-';
            }
            if ($n_menu->save(false)) {
                echo "\n" . $i . " Saved " . $n_menu->title_uk;
                $i++;
            } else {
                print_r($n_menu->errors);
            }

        }


    }

    public function actionPage()
    {
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

//        $pages = $original_db->createCommand(
//            $Query->select('*')
//                ->from('{{%pages}}')
//                ->where(['link_uk' => $menu['key']])
//                ->createCommand()
//                ->getRawSql()
//        )->queryAll();

        $i = 1;
        $pages = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%ema_posts}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();
        foreach ($pages as $menu) {

            $n_menu = new Pages();

            $n_menu->slug = $menu['link_uk'] ?? '-';
            $n_menu->created_at = isset($menu['pub_date']) ? intval($menu['pub_date']) : 0;
            $n_menu->updated_at = isset($menu['last_change']) ? intval($menu['last_change']) : 0;
            $n_menu->category_id = isset($menu['category']) ? intval($menu['category']) : 0;
            $n_menu->menu_id = null;
            $n_menu->published = 1;

            $n_menu->title_uk = $menu['name_uk'] ?? '-';
            $n_menu->text_uk = !empty($menu['page_uk']) ? $menu['page_uk'] : '<p></p>';
            $n_menu->seo_title_uk = $menu['html_title_uk'] ?? '-';
            $n_menu->seo_description_uk = $menu['html_description_uk'] ?? '-';
            $n_menu->seo_keywords_uk = $menu['html_keywords_uk'] ?? '-';

            $n_menu->title_en = $menu['name_en'] ?? '-';
            $n_menu->text_en = $menu['page_en'] ?? '-';
            $n_menu->seo_title_en = $menu['html_title_en'] ?? '-';
            $n_menu->seo_description_en = $menu['html_description_en'] ?? '-';
            $n_menu->seo_keywords_en = $menu['html_keywords_en'] ?? '-';

            $n_menu->title_ru = $menu['name_ru'] ?? '-';
            $n_menu->text_ru = $menu['page_ru'] ?? '-';
            $n_menu->seo_title_ru = $menu['html_title_ru'] ?? '-';
            $n_menu->seo_description_ru = $menu['html_description_ru'] ?? '-';
            $n_menu->seo_keywords_ru = $menu['html_keywords_ru'] ?? '-';
            $n_menu->image = $menu['image'] ?? '-';
            $n_menu->image_og = $menu['og_image'] ?? '-';

            if ($n_menu->save(false)) {
                echo "\n" . $i . " Saved " . $n_menu->title_uk;
                $i++;
            } else {
                print_r($menu);
                print_r($n_menu->errors);

            }

        }


    }

    public function actionSystem()
    {
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

        $systems = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%system}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();

        foreach ($systems as $system) {
            $system_translate = $original_db->createCommand(
                $Query->select('*')
                    ->from('{{%system_translate}}')
                    ->where(['system_id' => $system['id']])
                    ->createCommand()
                    ->getRawSql()
            )->queryAll();
            $n = new System();
            $n->title_uk = $system['value'];
            $n->key = $system['key'];
            if (isset($system_translate[0]['language_id']) == 2) {
                $n->title_en = $system_translate[0]['value'];
            } else {
                $n->title_en = isset($system_translate[1]['value']) ? $system_translate[1]['value'] : '-';
            }
            if (isset($system_translate[1]['language_id']) == 3) {
                $n->title_ru = $system_translate[1]['value'];
            } else {
                $n->title_ru = isset($system_translate[0]['value']) ? $system_translate[0]['value'] : '-';
            }
            if ($n->save()) {
                echo "\n Saved " . $n->title_uk;
            } else {
                print_r($n->errors);
            }

        }

    }

    public function actionProject()
    {
        $pages = Pages::find()->where(['category_id' => [11, 16, 18, 25, 35]])->all();
        $i = 1;
        foreach ($pages as $page) {
            $model = new Projects();
            $model->slug = $page->slug ?? '-';
            $model->created_at = isset($page['created_at']) ? intval($page['created_at']) : 0;
            $model->updated_at = isset($page['updated_at']) ? intval($page['updated_at']) : 0;
            $model->category_id = isset($page['category_id']) ? intval($page['category_id']) : 0;
            $model->menu_id = $page->menu_id;
            $model->published = $page->published;

            $model->title_uk = $page['title_uk'] ?? '-';
            $model->text_uk = !empty($page['text_uk']) ? $page['text_uk'] : '<p></p>';
            $model->seo_title_uk = $page['seo_title_uk'] ?? '-';
            $model->seo_description_uk = $page['seo_description_uk'] ?? '-';
            $model->seo_keywords_uk = $page['seo_keywords_uk'] ?? '-';

            $model->title_en = $page['title_en'] ?? '-';
            $model->text_en = $page['text_en'] ?? '-';
            $model->seo_title_en = $page['html_title_en'] ?? '-';
            $model->seo_description_en = $page['seo_description_en'] ?? '-';
            $model->seo_keywords_en = $page['seo_keywords_en'] ?? '-';

            $model->title_ru = $page['title_ru'] ?? '-';
            $model->text_ru = $page['text_ru'] ?? '-';
            $model->seo_title_ru = $page['seo_title_ru'] ?? '-';
            $model->seo_description_ru = $page['seo_description_ru'] ?? '-';
            $model->seo_keywords_ru = $page['seo_keywords_ru'] ?? '-';
            $model->image = $page['image'] ?? '-';
            $model->image_og = $page['og_image'] ?? '-';

            if ($model->save(false)) {
                echo "\n Saved " . $model->title_uk;
                $page->delete();
            } else {
                print_r($model->errors);

            }

        }
    }

    public function actionNews()
    {
        $pages = Pages::find()->where(['category_id' => [27, 34, 36, 1, 2]])->all();
        $i = 1;
        foreach ($pages as $page) {
            $model = new News();
            $model->slug = $page->slug ?? '-';
            $model->created_at = isset($page['created_at']) ? intval($page['created_at']) : 0;
            $model->updated_at = isset($page['updated_at']) ? intval($page['updated_at']) : 0;
            $model->category_id = isset($page['category_id']) ? intval($page['category_id']) : 0;
            $model->menu_id = $page->menu_id;
            $model->published = $page->published;

            $model->title_uk = $page['title_uk'] ?? '-';
            $model->text_uk = !empty($page['text_uk']) ? $page['text_uk'] : '<p></p>';
            $model->seo_title_uk = $page['seo_title_uk'] ?? '-';
            $model->seo_description_uk = $page['seo_description_uk'] ?? '-';
            $model->seo_keywords_uk = $page['seo_keywords_uk'] ?? '-';

            $model->title_en = $page['title_en'] ?? '-';
            $model->text_en = $page['text_en'] ?? '-';
            $model->seo_title_en = $page['html_title_en'] ?? '-';
            $model->seo_description_en = $page['seo_description_en'] ?? '-';
            $model->seo_keywords_en = $page['seo_keywords_en'] ?? '-';

            $model->title_ru = $page['title_ru'] ?? '-';
            $model->text_ru = $page['text_ru'] ?? '-';
            $model->seo_title_ru = $page['seo_title_ru'] ?? '-';
            $model->seo_description_ru = $page['seo_description_ru'] ?? '-';
            $model->seo_keywords_ru = $page['seo_keywords_ru'] ?? '-';
            $model->image = $page['image'] ?? '-';
            $model->image_og = $page['og_image'] ?? '-';

            if ($model->save(false)) {
                echo "\n" . $i . " Saved " . $model->title_uk;
                $page->delete();
                $i++;
            } else {
                print_r($model->errors);

            }

        }
    }


    public function actionProjectCategory()
    {
        $category = Category::find()->with('parents')
            ->where(['id' => [10, 12, 13]])
//            ->asArray()
            ->all();
        foreach ($category as $value) {
            $model = new ProjectCategory();
            $model->id = $value->id;
            $model->title_uk = $value->title_uk;
            $model->title_en = $value->title_en;
            $model->title_ru = $value->title_ru;
            $model->slug = $value->slug;
            $model->parent_id = $value->parent_id;
            $model->order = $value->order;
            $model->published = $value->published;
            $model->image = $value->image;
            $model->seo_description_uk = $value->seo_description_uk;
            $model->seo_description_en = $value->seo_description_en;
            $model->seo_description_ru = $value->seo_description_ru;
            $model->seo_keywords_uk = $value->seo_keywords_uk;
            $model->seo_keywords_en = $value->seo_keywords_en;
            $model->seo_keywords_ru = $value->seo_keywords_ru;
            if ($model->save(false)) {
                echo "Saved " . $model->title_uk . PHP_EOL;
            }
        }
        $category_p = Category::find()->with('parents')
            ->where(['id' => [12, 13]])
//            ->asArray()
            ->all();
        foreach ($category_p as $v) {
            foreach ($v->parents as $value) {
                $model = new ProjectCategory();
                $model->id = $value->id;
                $model->title_uk = $value->title_uk;
                $model->title_en = $value->title_en;
                $model->title_ru = $value->title_ru;
                $model->slug = $value->slug;
                $model->parent_id = $value->parent_id;
                $model->order = $value->order;
                $model->published = $value->published;
                $model->image = $value->image;
                $model->seo_description_uk = $value->seo_description_uk;
                $model->seo_description_en = $value->seo_description_en;
                $model->seo_description_ru = $value->seo_description_ru;
                $model->seo_keywords_uk = $value->seo_keywords_uk;
                $model->seo_keywords_en = $value->seo_keywords_en;
                $model->seo_keywords_ru = $value->seo_keywords_ru;
                if ($model->save(false)) {
                    echo "Saved " . $model->title_uk . PHP_EOL;
                }
            }
        }

        $res = ProjectCategory::find()->all();
        foreach ($res as $re){
            $rm = Category::find()->where(['id' => $re->id])->one();
            $rm->delete();
        }

    }

    public function actionCat(){
        $value = Category::findOne(17);
        $model = new ProjectCategory();
        $model->id = $value->id;
        $model->title_uk = $value->title_uk;
        $model->title_en = $value->title_en;
        $model->title_ru = $value->title_ru;
        $model->slug = $value->slug;
        $model->parent_id = 12;
        $model->order = $value->order;
        $model->published = $value->published;
        $model->image = $value->image;
        $model->seo_description_uk = $value->seo_description_uk;
        $model->seo_description_en = $value->seo_description_en;
        $model->seo_description_ru = $value->seo_description_ru;
        $model->seo_keywords_uk = $value->seo_keywords_uk;
        $model->seo_keywords_en = $value->seo_keywords_en;
        $model->seo_keywords_ru = $value->seo_keywords_ru;
        if ($model->save(false)) {
            echo "Saved " . $model->title_uk . PHP_EOL;
            $value->delete();
        }

        $pages = Pages::find()->where(['category_id' => 17])->all();
        foreach ($pages as $page){
            $model = new Projects();
            $model->slug = $page->slug ?? '-';
            $model->created_at = isset($page['created_at']) ? intval($page['created_at']) : 0;
            $model->updated_at = isset($page['updated_at']) ? intval($page['updated_at']) : 0;
            $model->category_id = isset($page['category_id']) ? intval($page['category_id']) : 0;
            $model->menu_id = $page->menu_id;
            $model->published = $page->published;

            $model->title_uk = $page['title_uk'] ?? '-';
            $model->text_uk = !empty($page['text_uk']) ? $page['text_uk'] : '<p></p>';
            $model->seo_title_uk = $page['seo_title_uk'] ?? '-';
            $model->seo_description_uk = $page['seo_description_uk'] ?? '-';
            $model->seo_keywords_uk = $page['seo_keywords_uk'] ?? '-';

            $model->title_en = $page['title_en'] ?? '-';
            $model->text_en = $page['text_en'] ?? '-';
            $model->seo_title_en = $page['html_title_en'] ?? '-';
            $model->seo_description_en = $page['seo_description_en'] ?? '-';
            $model->seo_keywords_en = $page['seo_keywords_en'] ?? '-';

            $model->title_ru = $page['title_ru'] ?? '-';
            $model->text_ru = $page['text_ru'] ?? '-';
            $model->seo_title_ru = $page['seo_title_ru'] ?? '-';
            $model->seo_description_ru = $page['seo_description_ru'] ?? '-';
            $model->seo_keywords_ru = $page['seo_keywords_ru'] ?? '-';
            $model->image = $page['image'] ?? '-';
            $model->image_og = $page['og_image'] ?? '-';

            if ($model->save(false)) {
                echo "\n Saved " . $model->title_uk;
                $page->delete();

            } else {
                print_r($model->errors);

            }
        }

    }

    public function actionNewsCategory(){
        $category = Category::find()->with('parents')
            ->where(['id' => [1, 27, 34]])
//            ->asArray()
            ->all();
        foreach ($category as $value) {
            $model = new NewsCategory();
            $model->id = $value->id;
            $model->title_uk = $value->title_uk;
            $model->title_en = $value->title_en;
            $model->title_ru = $value->title_ru;
            $model->slug = $value->slug;
            $model->parent_id = $value->parent_id;
            $model->order = $value->order;
            $model->published = $value->published;
            $model->image = $value->image;
            $model->seo_description_uk = $value->seo_description_uk;
            $model->seo_description_en = $value->seo_description_en;
            $model->seo_description_ru = $value->seo_description_ru;
            $model->seo_keywords_uk = $value->seo_keywords_uk;
            $model->seo_keywords_en = $value->seo_keywords_en;
            $model->seo_keywords_ru = $value->seo_keywords_ru;
            if ($model->save(false)) {
                echo "Saved " . $model->title_uk . PHP_EOL;
            }
        }
        $category_p = Category::find()->with('parents')
            ->where(['id' => [27, 34]])
//            ->asArray()
            ->all();
        foreach ($category_p as $v) {
            foreach ($v->parents as $value) {
                $model = new NewsCategory();
                $model->id = $value->id;
                $model->title_uk = $value->title_uk;
                $model->title_en = $value->title_en;
                $model->title_ru = $value->title_ru;
                $model->slug = $value->slug;
                $model->parent_id = $value->parent_id;
                $model->order = $value->order;
                $model->published = $value->published;
                $model->image = $value->image;
                $model->seo_description_uk = $value->seo_description_uk;
                $model->seo_description_en = $value->seo_description_en;
                $model->seo_description_ru = $value->seo_description_ru;
                $model->seo_keywords_uk = $value->seo_keywords_uk;
                $model->seo_keywords_en = $value->seo_keywords_en;
                $model->seo_keywords_ru = $value->seo_keywords_ru;
                if ($model->save(false)) {
                    echo "Saved " . $model->title_uk . PHP_EOL;
                }
            }
        }

        $res = NewsCategory::find()->all();
        foreach ($res as $re){
            $rm = Category::find()->where(['id' => $re->id])->one();
//            $rm->delete();
        }

    }

    public function actionPageT(){
        $page_cat = [1,2,36];
        $proj_cat = 35;

        $pages = News::find()
//            ->select(['id', 'category_id', 'title_uk'])
            ->where(['category_id' => $page_cat])
//            ->asArray()
            ->all();
//        print_r($pages);
//        die;
        foreach ($pages as $page){
//            $model = new News();
            $model->slug = $page->slug ?? '-';
            $model->created_at = isset($page['created_at']) ? intval($page['created_at']) : 0;
            $model->updated_at = isset($page['updated_at']) ? intval($page['updated_at']) : 0;
            $model->category_id = $proj_cat;
            $model->menu_id = $page->menu_id;
            $model->published = $page->published;

            $model->title_uk = $page['title_uk'] ?? '-';
            $model->text_uk = !empty($page['text_uk']) ? $page['text_uk'] : '<p></p>';
            $model->seo_title_uk = $page['seo_title_uk'] ?? '-';
            $model->seo_description_uk = $page['seo_description_uk'] ?? '-';
            $model->seo_keywords_uk = $page['seo_keywords_uk'] ?? '-';

            $model->title_en = $page['title_en'] ?? '-';
            $model->text_en = $page['text_en'] ?? '-';
            $model->seo_title_en = $page['html_title_en'] ?? '-';
            $model->seo_description_en = $page['seo_description_en'] ?? '-';
            $model->seo_keywords_en = $page['seo_keywords_en'] ?? '-';

            $model->title_ru = $page['title_ru'] ?? '-';
            $model->text_ru = $page['text_ru'] ?? '-';
            $model->seo_title_ru = $page['seo_title_ru'] ?? '-';
            $model->seo_description_ru = $page['seo_description_ru'] ?? '-';
            $model->seo_keywords_ru = $page['seo_keywords_ru'] ?? '-';
            $model->image = $page['image'] ?? '-';
            $model->image_og = $page['og_image'] ?? '-';

            if ($model->save(false)) {
                echo "\n Saved " . $model->title_uk;
//                $page->delete();

            } else {
                print_r($model->errors);

            }
        }
    }


    /**
     * перевірка зображень
     */

    public function actionImg(){
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

        $pages = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%pages}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();

//        print_r($pages);
        foreach ($pages as $page){
//            echo $page['key'] . "\n";
            $ps = Pages::find()->where(['slug' => $page['key']])->one();
            if($ps){
                if($page['image']){
                    $ps->image = $page['image'];
                    if($ps->save()){
                        echo "Saved image Pages " . $ps->image . PHP_EOL;
                    }
                }else{
                    $ps->image = 'no';
                    if($ps->save()){
                        echo "Saved no Pages " . $ps->image . PHP_EOL;
                    }
                }
            }

        }
        foreach ($pages as $page){
//            echo $page['key'] . "\n";

            $pr = Projects::find()->where(['slug' => $page['key']])->one();

           if($pr){
                if($page['image']){
                    $pr->image = $page['image'];
                    if($pr->save()){
                        echo "Saved image Projects " . $pr->image . PHP_EOL;
                    }
                }else{
                    $pr->image = 'no';
                    if($pr->save()){
                        echo "Saved no Projects " . $pr->image . PHP_EOL;
                    }
                }
            }
        }
        foreach ($pages as $page){
//            echo $page['key'] . "\n";

            $ns = News::find()->where(['slug' => $page['key']])->one();

            if($ns){
                if($page['image']){
                    $ns->image = $page['image'];
                    if($ns->save()){
                        echo "Saved image Projects " . $ns->image . PHP_EOL;
                    }
                }else{
                    $ns->image = 'no';
                    if($ns->save()){
                        echo "Saved no Projects " . $ns->image . PHP_EOL;
                    }
                }
            }
        }
    }

}
