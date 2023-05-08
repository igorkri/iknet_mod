<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "reviews".
 *
 * @property int $id
 * @property string|null $title_uk Название UK
 * @property string|null $title_en Название EN
 * @property string|null $title_ru Название RU
 * @property string|null $description_uk Описание UK
 * @property string|null $description_en Описание EN
 * @property string|null $description_ru Описание RU
 * @property string|null $author_uk Автор UK
 * @property string|null $author_en Автор EN
 * @property string|null $author_ru Автор RU
 */
class Reviews extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'reviews';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['description_uk', 'description_en', 'description_ru'], 'string'],
            [['title_uk', 'title_en', 'title_ru', 'author_uk', 'author_en', 'author_ru'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title_uk' => Yii::t('app', 'Назва UK'),
            'title_en' => Yii::t('app', 'Назва EN'),
            'title_ru' => Yii::t('app', 'Назва RU'),
            'description_uk' => Yii::t('app', 'Опис UK'),
            'description_en' => Yii::t('app', 'Опис EN'),
            'description_ru' => Yii::t('app', 'Опис RU'),
            'author_uk' => Yii::t('app', 'Автор UK'),
            'author_en' => Yii::t('app', 'Автор EN'),
            'author_ru' => Yii::t('app', 'Автор RU'),
        ];
    }

    public function getTitle($id)
    {
        $lang = Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->title_ru;
        }elseif($lang == 'en'){
            return $res->title_en;
        }else{
            return $res->title_uk;
        }
    }

    public function getText($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->description_ru;
        }elseif($lang == 'en'){
            return $res->description_en;
        }else{
            return $res->description_uk;
        }
    }

    public function getAuthor($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->author_ru;
        }elseif($lang == 'en'){
            return $res->author_en;
        }else{
            return $res->author_uk;
        }
    }
}
