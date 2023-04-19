<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "page_career".
 *
 * @property int $id
 * @property string|null $text_header Верхній текст
 * @property string|null $text_header_en Верхній текст
 * @property string|null $text_header_ru Верхній текст
 * @property string|null $text_footer Нижній текст
 * @property string|null $text_footer_en Нижній текст
 * @property string|null $text_footer_ru Нижній текст
 */
class PageCareer extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'page_career';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['text_header', 'text_header_en', 'text_header_ru', 'text_footer', 'text_footer_en', 'text_footer_ru'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'text_header' => 'Верхній текст',
            'text_footer' => 'Нижній текст',
        ];
    }
}
