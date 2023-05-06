<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "home_tabs".
 *
 * @property int $id
 * @property string $title_uk Название UK
 * @property string $title_en Название EN
 * @property string $title_ru Название RU
 * @property string|null $slug Урл страницы
 * @property int|null $section_id Секция отображения
 * @property int|null $order Сортировка
 * @property int|null $published Отображать
 * @property string|null $description_uk Описание UK
 * @property string|null $description_en Описание EN
 * @property string|null $description_ru Описание RU
 */
class HomeTabs extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'home_tabs';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title_uk', 'title_en', 'title_ru'], 'required'],
            [['section_id', 'order', 'published'], 'integer'],
            [['description_uk', 'description_en', 'description_ru'], 'string'],
            [['title_uk', 'title_en', 'title_ru', 'slug'], 'string', 'max' => 255],
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
            'title_uk' => 'Название UK',
            'title_en' => 'Название EN',
            'title_ru' => 'Название RU',
            'slug' => 'Урл страницы',
            'section_id' => 'Секция отображения',
            'order' => 'Сортировка',
            'published' => 'Отображать',
            'description_uk' => 'Описание UK',
            'description_en' => 'Описание EN',
            'description_ru' => 'Описание RU',
        ];
    }

}
