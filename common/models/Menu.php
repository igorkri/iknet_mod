<?php

namespace common\models;

use Yii;
use yii\behaviors\SluggableBehavior;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "menu".
 *
 * @property int $id
 * @property string $title_uk Название UK
 * @property string $title_en Название EN
 * @property string $title_ru Название RU
 * @property string|null $slug SLUG
 * @property int|null $parent_id Родитель
 * @property int|null $order Сортировка
 * @property int|null $published Отображать
 */
class Menu extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'menu';
    }

    public function behaviors()
    {
        return [
            'sortable' => [
                'class' => \kotchuprik\sortable\behaviors\Sortable::class,
                'query' => self::find(),
            ],
            [
                'class' => SluggableBehavior::class,
                'attribute' => 'title_uk',
                'slugAttribute' => 'slug',
            ],
//            'timestamp' => [
//                'class' => 'yii\behaviors\TimestampBehavior',
//                'attributes' => [
//                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
//                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
//                ],
//            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title_uk', 'title_en', 'title_ru'], 'required'],
            [['parent_id', 'order', 'published'], 'integer'],
            [['title_uk', 'title_en', 'title_ru', 'slug'], 'string', 'max' => 255],
            [['slug'], 'unique'],
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
            'slug' => 'SLUG',
            'parent_id' => 'Категорія',
            'order' => 'Сортування',
            'published' => 'Відображати (Так | Ні)',
        ];
    }

    public static function getList()
    {
        $list = self::find()
            ->with('children')
            ->where(['parent_id' => null])
            ->andWhere(['published' => 1])
            ->orderBy('order')
            ->all();
        return $list ?? [];
    }

//    public function getChildren($id)
//    {
//        return self::find()->where(['parent_id' => $id])->orderBy('order')->asArray()->all();
//    }

    public function getTitleText($id)
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

    public function getParent(){
        return $this->hasOne(Menu::class, ['id' => 'parent_id']);
    }

    public function getChildren(){
        return $this->hasMany(Menu::class, ['parent_id' => 'id']);
    }


}
