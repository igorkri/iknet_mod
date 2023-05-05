<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "presents_energy_list".
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $description
 * @property float|null $price
 * @property string|null $sku
 */
class PresentsEnergyList extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'presents_energy_list';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['title_uk', 'description_uk', 'sku_uk', 'title_en', 'description_en', 'sku_en', 'title_ru', 'description_ru', 'sku_ru'], 'safe'],
            [['price_uk', 'price_en', 'price_ru'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'description' => 'Description',
            'price' => 'Price',
            'sku' => 'Sku',
        ];
    }

    public function getImg(){
        return $this->hasOne(PresentsEnergyListImg::class, ['presents_energy_list_id' => 'id']);
    }

    public function getImages(){
        return $this->hasMany(PresentsEnergyListImg::class, ['presents_energy_list_id' => 'id']);
    }

}
