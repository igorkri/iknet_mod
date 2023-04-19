<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "system".
 *
 * @property int $id
 * @property string|null $key
 * @property string|null $title_uk
 * @property string|null $title_en
 * @property string|null $title_ru
 */
class System extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'system';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['key', 'title_uk', 'title_en', 'title_ru'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'key' => 'Key',
            'title_uk' => 'Title Uk',
            'title_en' => 'Title En',
            'title_ru' => 'Title Ru',
        ];
    }

    static function getText($key){
        $res = self::find()->where(['key' => $key])->one();
        $lang = \Yii::$app->session->get('_language');
        if($lang == 'ru'){
           return $res->title_ru;
        }elseif($lang == 'en'){
            return $res->title_en;
        }else{
            return $res->title_uk;
        }
    }

}
