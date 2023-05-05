<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "presents_energy".
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $description
 * @property string|null $title_ru
 * @property string|null $title_en
 * @property string|null $description_ru
 * @property string|null $description_en
 */
class PresentsEnergy extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'presents_energy';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['description','description_en','description_en'], 'string'],
            [['title','title_en','title_ru'], 'string', 'max' => 255],
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
            'title_en' => 'Title_en',
            'title_ru' => 'Title_ru',
            'description' => 'Description',
            'description_en' => 'Description_en',
            'description_ru' => 'Description_ru',
        ];
    }

    public function getTitle($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->title_ru;
        }elseif($lang == 'en'){
            return $res->title_en;
        }else{
            return $res->title;
        }
    }

    public function getDescription($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->description_ru;
        }elseif($lang == 'en'){
            return $res->description_en;
        }else{
            return $res->description;
        }
    }
}
