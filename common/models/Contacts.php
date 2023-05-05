<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "contacts".
 *
 * @property int $id
 * @property string|null $title_uk Название_UK
 * @property string|null $title_en Название_EN
 * @property string|null $title_ru Название_RU
 * @property string|null $adres_uk Адрес_UK
 * @property string|null $adres_en Адрес_EN
 * @property string|null $adres_ru Адрес_RU
 * @property string|null $coment_uk Коментарий_UK
 * @property string|null $coment_en Коментарий_EN
 * @property string|null $coment_ru Коментарий_RU
 * @property string|null $email Почта
 * @property string|null $site Сайт
 * @property string|null $tel1 Телефон
 * @property string|null $tel2 Телефон_моб
 * @property string|null $image_uk Картинка_UK
 * @property string|null $image_en Картинка_EN
 * @property string|null $image_ru Картинка_RU
 */
class Contacts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'contacts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['coment_uk', 'coment_en', 'coment_ru'], 'string'],
            [['title_uk', 'title_en', 'title_ru', 'adres_uk', 'adres_en', 'adres_ru',
                'image_uk', 'image_en','image_ru', 'email', 'site', 'tel1', 'tel2'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title_uk' => Yii::t('app', 'Название_UK'),
            'title_en' => Yii::t('app', 'Название_EN'),
            'title_ru' => Yii::t('app', 'Название_RU'),
            'adres_uk' => Yii::t('app', 'Адрес_UK'),
            'adres_en' => Yii::t('app', 'Адрес_EN'),
            'adres_ru' => Yii::t('app', 'Адрес_RU'),
            'coment_uk' => Yii::t('app', 'Коментарий_UK'),
            'coment_en' => Yii::t('app', 'Коментарий_EN'),
            'coment_ru' => Yii::t('app', 'Коментарий_RU'),
            'image_uk' => Yii::t('app', 'Картинка_UK'),
            'image_en' => Yii::t('app', 'Картинка_EN'),
            'image_ru' => Yii::t('app', 'Картинка_RU'),
            'email' => Yii::t('app', 'Почта'),
            'site' => Yii::t('app', 'Сайт'),
            'tel1' => Yii::t('app', 'Телефон'),
            'tel2' => Yii::t('app', 'Телефон_Моб'),
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
            return $res->title_uk;
        }
    }

    public function getComent($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->coment_ru;
        }elseif($lang == 'en'){
            return $res->coment_en;
        }else{
            return $res->coment_uk;
        }
    }

    public function getAdress($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->adres_ru;
        }elseif($lang == 'en'){
            return $res->adres_en;
        }else{
            return $res->adres_uk;
        }
    }

    public function getImage($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->image_ru;
        }elseif($lang == 'en'){
            return $res->image_en;
        }else{
            return $res->image_uk;
        }
    }
}
