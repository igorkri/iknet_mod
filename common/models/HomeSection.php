<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "home_section".
 *
 * @property int $id
 * @property string $title_uk Назва UK
 * @property string $title_en Назва EN
 * @property string $title_ru Назва RU
 * @property string|null $slug Урл секції
 * @property int|null $order Сортування
 * @property int|null $published Відображати
 * @property string|null $description_uk Опис UK
 * @property string|null $description_en Опис EN
 * @property string|null $description_ru Опис RU
 * @property string|null $image Зображення
 * @property string|null $image_2 Зображення 2
 */
class HomeSection extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'home_section';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title_uk', 'title_en', 'title_ru'], 'required'],
            [['order', 'published'], 'integer'],
            [['description_uk', 'description_en', 'description_ru'], 'string'],
            [['title_uk', 'title_en', 'title_ru', 'slug', 'image', 'image_2'], 'string', 'max' => 255],
            [['slug'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title_uk' => 'Назва UK',
            'title_en' => 'Назва EN',
            'title_ru' => 'Назва RU',
            'slug' => 'Урл секції',
            'order' => 'Сортування',
            'published' => 'Відображати',
            'description_uk' => 'Опис UK',
            'description_en' => 'Опис EN',
            'description_ru' => 'Опис RU',
            'image' => 'Зображення',
            'image_2' => 'Зображення 2',
        ];
    }

    public function getTabs(){
        return $this->hasMany(HomeTabs::class, ['section_id' => 'id']);
    }
}
