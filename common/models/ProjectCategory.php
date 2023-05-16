<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;
use yii\helpers\VarDumper;

/**
 * This is the model class for table "project_category".
 *
 * @property int $id
 * @property string $title_uk Название UK
 * @property string $title_en Название EN
 * @property string $title_ru Название RU
 * @property string|null $slug SLUG
 * @property int|null $parent_id Родитель
 * @property int|null $order Сортировка
 * @property int|null $published Отображать
 * @property string|null $image Изображение
 * @property string|null $seo_description_uk SEO Описание UK
 * @property string|null $seo_description_en SEO Описание EN
 * @property string|null $seo_description_ru SEO Описание RU
 * @property string|null $seo_keywords_uk SEO Ключи UK
 * @property string|null $seo_keywords_en SEO Ключи EN
 * @property string|null $seo_keywords_ru SEO Ключи RU
 */
class ProjectCategory extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'project_category';
    }

    public function behaviors()
    {
        return [
            [
                'class' => SluggableBehavior::class,
                'attribute' => 'title_uk',
                'slugAttribute' => 'slug',
            ],
//            'timestamp' => [
//                'class' => 'yii\behaviors\TimestampBehavior',
//                'attributes' => [
//                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
//                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
//                ],
//            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
        public function rules()
        {
            return [
                [['title_uk', 'title_en', 'title_ru'], 'required'],
                [['parent_id', 'order', 'published'], 'integer'],
                [['title_uk', 'title_en', 'title_ru', 'slug', 'image', 'seo_description_uk', 'seo_description_en', 'seo_description_ru', 'seo_keywords_uk', 'seo_keywords_en', 'seo_keywords_ru'], 'string', 'max' => 255],
                [['slug'], 'unique'],
                [['image'], 'unique'],
                [['seo_description_uk'], 'unique'],
                [['seo_description_en'], 'unique'],
                [['seo_description_ru'], 'unique'],
                [['seo_keywords_uk'], 'unique'],
                [['seo_keywords_en'], 'unique'],
                [['seo_keywords_ru'], 'unique'],
            ];
        }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title_uk' => 'Назва Uk',
            'title_en' => 'Назва En',
            'title_ru' => 'Назва Ru',
            'slug' => 'Slug',
            'parent_id' => 'Parent ID',
            'order' => 'Сортування',
            'published' => 'Відображення',
            'image' => 'Картинка',
            'seo_description_uk' => 'Seo Опис Uk',
            'seo_description_en' => 'Seo Опис En',
            'seo_description_ru' => 'Seo Опис Ru',
            'seo_keywords_uk' => 'Seo Keywords Uk',
            'seo_keywords_en' => 'Seo Keywords En',
            'seo_keywords_ru' => 'Seo Keywords Ru',
        ];
    }

    public function getParent(){
        return $this->hasOne(ProjectCategory::class, ['id' => 'parent_id']);
    }
    public function getParents(){
        return $this->hasMany(ProjectCategory::class, ['parent_id' => 'id'])->orderBy('order ASC');
    }
    public function getParents2(){
        return $this->hasMany(ProjectCategory::class, ['id' => 'parent_id']);
    }

    public function getTitle($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
//        VarDumper::dump($res, 10, true);
//        die;
        if($lang == 'ru'){
            return $res->title_ru;
        }elseif($lang == 'en'){
            return $res->title_en;
        }else{
            return $res->title_uk;
        }
    }

    static function getTabProject($slug){
        $cat_1 = ProjectCategory::find()
            ->with(['parents'])
            ->where(['slug' => $slug])
            ->one();
        if(isset($cat_1->parents) && count($cat_1->parents) <= 0){
            $cat_2 = ProjectCategory::find()
                ->with(['parents'])
                ->where(['id' => $cat_1->parent_id])
                ->one();
            return $cat_2;
        }
        return $cat_1;
    }

}
