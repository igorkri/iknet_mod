<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "career_contacts".
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $mail
 * @property string|null $phone
 * @property string|null $vacation
 * @property int|null $page_id
 * @property string|null $message
 */
class CareerContacts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'career_contacts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['page_id'], 'integer'],
            [['message'], 'string'],
            [['name', 'mail', 'phone', 'vacation'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'mail' => 'Mail',
            'phone' => 'Phone',
            'vacation' => 'Vacation',
            'page_id' => 'Page ID',
            'message' => 'Message',
        ];
    }
}
