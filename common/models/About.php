<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "about".
 *
 * @property int $id
 * @property string|null $title_uk Название UK
 * @property string|null $title_en Название EN
 * @property string|null $title_ru Название RU
 * @property string|null $description_uk Описание UK
 * @property string|null $description_en Описание EN
 * @property string|null $description_ru Описание RU
 * @property string|null $image Картинка
 */
class About extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'about';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['description_uk', 'description_en', 'description_ru'], 'string'],
            [['title_uk', 'title_en', 'title_ru', 'image'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title_uk' => Yii::t('app', 'Название UK'),
            'title_en' => Yii::t('app', 'Название EN'),
            'title_ru' => Yii::t('app', 'Название RU'),
            'description_uk' => Yii::t('app', 'Описание UK'),
            'description_en' => Yii::t('app', 'Описание EN'),
            'description_ru' => Yii::t('app', 'Описание RU'),
            'image' => Yii::t('app', 'Картинка'),
        ];
    }
}
