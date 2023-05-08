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
            'page_id' => 'Сторінка ID',
            'title' => 'Назва',
            'message' => 'Повідомлення',
        ];
    }

    public function getVacTitle($id)
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

    public function getVacMessage($id)
    {
        $lang = \Yii::$app->session->get('_language');
        $res = self::find()->where(['id' => $id])->one();
        if($lang == 'ru'){
            return $res->message_ru;
        }elseif($lang == 'en'){
            return $res->message_en;
        }else{
            return $res->message;
        }
    }
}
