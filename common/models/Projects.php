<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;
use yii\db\ActiveRecord;
use yii\helpers\VarDumper;

/**
 * This is the model class for table "projects".
 *
 * @property int $id
 * @property string|null $slug Slug
 * @property int|null $created_at Дата создания
 * @property int|null $updated_at Дата обновления
 * @property int|null $category_id Категория
 * @property int|null $menu_id Меню
 * @property int|null $published Отображать
 * @property string $title_uk Название UK
 * @property string $text_uk Текст UK
 * @property string|null $seo_title_uk SEO Название UK
 * @property string|null $seo_description_uk SEO Описание UK
 * @property string|null $seo_keywords_uk SEO Ключевые слова UK
 * @property string|null $title_en Название EN
 * @property string|null $text_en Текст EN
 * @property string|null $seo_title_en SEO Название EN
 * @property string|null $seo_description_en SEO Описание EN
 * @property string|null $seo_keywords_en SEO Ключевые слова EN
 * @property string|null $title_ru Название RU
 * @property string|null $text_ru Текст RU
 * @property string|null $seo_title_ru SEO Название RU
 * @property string|null $seo_description_ru SEO Описание RU
 * @property string|null $seo_keywords_ru SEO Ключевые слова RU
 * @property string|null $image Изображение
 * @property string|null $image_og Изображение
 */
class Projects extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'projects';
    }

    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::class,
                'attribute' => 'title_uk',
                'slugAttribute' => 'slug',
            ],
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['created_at', 'updated_at', 'category_id', 'menu_id', 'published'], 'integer'],
            [['title_uk'], 'required'],
            [['text_uk', 'text_en', 'text_ru'], 'string'],
            [['slug', 'title_uk', 'seo_title_uk', 'seo_description_uk', 'seo_keywords_uk', 'title_en', 'seo_title_en', 'seo_description_en', 'seo_keywords_en', 'title_ru', 'seo_title_ru', 'seo_description_ru', 'seo_keywords_ru', 'image', 'image_og'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'slug' => 'Slug',
            'created_at' => 'Дата створення',
            'updated_at' => 'Дата оновлення',
            'category_id' => 'Категорія ID',
            'menu_id' => 'Меню ID',
            'published' => 'Відображення',
            'title_uk' => 'Назва Uk',
            'text_uk' => 'Опис Uk',
            'seo_title_uk' => 'Seo Назва Uk',
            'seo_description_uk' => 'Seo Опис Uk',
            'seo_keywords_uk' => 'Seo Keywords Uk',
            'title_en' => 'Назва En',
            'text_en' => 'Опис En',
            'seo_title_en' => 'Seo Назва En',
            'seo_description_en' => 'Seo Опис En',
            'seo_keywords_en' => 'Seo Keywords En',
            'title_ru' => 'Назва Ru',
            'text_ru' => 'Опис Ru',
            'seo_title_ru' => 'Seo Назва Ru',
            'seo_description_ru' => 'Seo Опис Ru',
            'seo_keywords_ru' => 'Seo Keywords Ru',
            'image' => 'Картинка',
            'image_og' => 'Картинка Og',
        ];
    }

    public function getCategory(){
        return $this->hasOne(Category::class, ['id' => 'category_id']);
    }

   public function getTitle($id, $lang = null){
       $lang = \Yii::$app->session->get('_language');
        $post = Projects::find()->where(['id' => $id])->one();
        if($lang == 'en'){
            return $post->title_en;
        }elseif($lang == 'ru'){
           return $post->title_ru;
       }else{
           return $post->title_uk;
       }
   }

   public function getText($id, $lang = null){
       $lang = \Yii::$app->session->get('_language');
        $post = Projects::find()->where(['id' => $id])->one();
        if($lang == 'en'){
            return $post->text_en;
        }elseif($lang == 'ru'){
           return $post->text_ru;
       }else{
           return $post->text_uk;
       }
   }

   public function getUrlParams($cat_id){

        $res = [];
        $category = ProjectCategory::find()->with('parent')->where(['id' => $cat_id])->one();
        $res = [
            'c' => $category->parent->slug,
            'a' => $category->slug
        ];
        return $res;
   }

}
