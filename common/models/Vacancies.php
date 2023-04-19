<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "vacancies".
 *
 * @property int $id
 * @property int|null $page_id
 * @property string|null $title
 * @property string|null $message
 */
class Vacancies extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'vacancies';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['page_id'], 'integer'],
            [['message', 'message_en', 'message_ru'], 'string'],
            [['title', 'title_en', 'title_ru'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'page_id' => 'Page ID',
            'title' => 'Title',
            'message' => 'Message',
        ];
    }
}
