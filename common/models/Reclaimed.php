<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "reclaimed".
 *
 * @property int $id
 * @property string $title_uk Назва UK
 * @property string $title_en Назва EN
 * @property string $title_ru Назва RU
 * @property string|null $value_uk Величина UK
 * @property string|null $value_en Величина EN
 * @property string|null $value_ru Величина RU
 * @property int|null $qty К-ть
 * @property int|null $order Сортування
 * @property int|null $published Відображати
 */
class Reclaimed extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'reclaimed';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title_uk', 'title_en', 'title_ru'], 'required'],
            [['qty', 'order', 'published'], 'integer'],
            [['title_uk', 'title_en', 'title_ru', 'value_uk', 'value_en', 'value_ru'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title_uk' => 'Назва UK',
            'title_en' => 'Назва EN',
            'title_ru' => 'Назва RU',
            'value_uk' => 'Величина UK (МВт +)',
            'value_en' => 'Величина EN (MW +)',
            'value_ru' => 'Величина RU (МВт +)',
            'qty' => 'К-ть ',
            'order' => 'Сортування',
            'published' => 'Відображати',
        ];
    }

    public function getTitle($id){
        $lang = \Yii::$app->session->get('_language');
        $post = Reclaimed::find()->where(['id' => $id])->one();
        if($lang == 'en'){
            return $post->title_en;
        }elseif($lang == 'ru'){
            return $post->title_ru;
        }else{
            return $post->title_uk;
        }
    }

    public function getValue($id){
        $lang = \Yii::$app->session->get('_language');
        $post = Reclaimed::find()->where(['id' => $id])->one();
        if($lang == 'en'){
            return $post->value_en;
        }elseif($lang == 'ru'){
            return $post->value_ru;
        }else{
            return $post->value_uk;
        }
    }
}
