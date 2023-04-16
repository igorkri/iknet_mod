<?php

namespace console\controllers;


use common\models\Category;
use common\models\Menu;
use common\models\Pages;
use Yii;
use yii\base\BaseObject;
use yii\console\Controller;
use yii\db\Query;

/**
 * Site controller
 */
class ImportOldDbController extends Controller
{

    public function actionMenu(){
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

        $menus = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%menu}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();

        foreach ($menus as $menu){
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
            if(isset($menu_translate[0]['language_id']) == 2){
                $n_menu->title_en = $menu_translate[0]['value'];
            }else{
                $n_menu->title_en = isset($menu_translate[1]['value']) ? $menu_translate[1]['value'] : '-';
            }
            if(isset($menu_translate[1]['language_id']) == 3){
                $n_menu->title_ru = $menu_translate[1]['value'];
            }else{
                $n_menu->title_ru = isset($menu_translate[0]['value']) ? $menu_translate[0]['value'] : '-';
            }
            if($n_menu->save()){
                echo "\n Saved " . $n_menu->title_uk;
            }else{
                print_r($n_menu->errors);
            }

        }

    }

    public function actionCategory(){
        $Query = new Query();
        $original_db = Yii::$app->dbOriginal;

        $page_categories = $original_db->createCommand(
            $Query->select('*')
                ->from('{{%page_categories}}')
                ->createCommand()
                ->getRawSql()
        )->queryAll();

$i = 1;
        foreach ($page_categories as $menu){
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

            if(isset($categories_translate[0]['language_id']) == 2){
                $n_menu->title_en = $categories_translate[0]['value'];
            }else{
                $n_menu->title_en = isset($categories_translate[1]['value']) ? $categories_translate[1]['value'] : '-';
            }
            if(isset($categories_translate[1]['language_id']) == 3){
                $n_menu->title_ru = $categories_translate[1]['value'];
            }else{
                $n_menu->title_ru = isset($categories_translate[0]['value']) ? $categories_translate[0]['value'] : '-';
            }
            if($n_menu->save()){
                echo "\n" . $i . " Saved " . $n_menu->title_uk;
                $i++;
            }else{
                print_r($n_menu->errors);
            }

        }


    }

    public function actionPage(){
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
        foreach ($pages as $menu){

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

            if($n_menu->save()){
                echo "\n" . $i . " Saved " . $n_menu->title_uk;
                $i++;
            }else{
                print_r($menu);
                print_r($n_menu->errors);

            }

        }


    }

}
