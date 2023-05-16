<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "clients_brand".
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $slug
 * @property string|null $file
 * @property int|null $published
 */
class ClientsBrand extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'clients_brand';
    }

    public function behaviors()
    {
        return [
            'sortable' => [
                'class' => \kotchuprik\sortable\behaviors\Sortable::class,
                'query' => self::find(),
            ]
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['order', 'published'], 'integer'],
            [['name', 'slug', 'file'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Назва',
            'slug' => 'Slug',
            'file' => 'Картинка',
            'published' => 'Відображення',
        ];
    }
}
