<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "menu".
 *
 * @property int $id
 * @property string $title_uk Название UK
 * @property string $title_en Название EN
 * @property string $title_ru Название RU
 * @property string|null $slug SLUG
 * @property int|null $parent_id Родитель
 * @property int|null $order Сортировка
 * @property int|null $published Отображать
 */
class Menu extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'menu';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title_uk', 'title_en', 'title_ru'], 'required'],
            [['parent_id', 'order', 'published'], 'integer'],
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
            'title_uk' => 'Title Uk',
            'title_en' => 'Title En',
            'title_ru' => 'Title Ru',
            'slug' => 'Slug',
            'parent_id' => 'Parent ID',
            'order' => 'Order',
            'published' => 'Published',
        ];
    }
}
