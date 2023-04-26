<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "presents_energy_list_img".
 *
 * @property int $id
 * @property int|null $presents_energy_list_id
 * @property string|null $file
 */
class PresentsEnergyListImg extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'presents_energy_list_img';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['presents_energy_list_id'], 'integer'],
            [['file'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'presents_energy_list_id' => 'Presents Energy List ID',
            'file' => 'File',
        ];
    }
}
