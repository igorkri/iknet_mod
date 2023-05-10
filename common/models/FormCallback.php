<?php

namespace common\models;

use manchenkov\yii\recaptcha\ReCaptchaValidator;
use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "form_callback".
 *
 * @property int $id
 * @property string|null $created_at Дата
 * @property string|null $page Сторінка
 * @property string|null $fio ПІБ
 * @property string|null $email Email
 * @property string|null $phone Телефон
 * @property string|null $message Повідомлення
 * @property string|null $vacancies Вакансія
 * @property string|null $code Код
 * @property string|null $file Коментарий_UK
 */
class FormCallback extends ActiveRecord
{

    public $captcha;


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'form_callback';
    }

    public function behaviors()
    {
        return [
            'timestamp' => [
                'class' => 'yii\behaviors\TimestampBehavior',
                'attributes' => [
                    ActiveRecord::EVENT_BEFORE_INSERT => ['created_at'],
//                    ActiveRecord::EVENT_BEFORE_UPDATE => ['updated_at'],
                ],
            ],
        ];
    }
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['created_at'], 'safe'],
            [['message'], 'string'],
            [['email'], 'email'],
            [['page', 'fio', 'email', 'phone', 'vacancies', 'code', 'file'], 'string', 'max' => 255],
            ['captcha', ReCaptchaValidator::class, 'score' => 0.8, 'action' => 'index'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'created_at' => 'Дата',
            'page' => 'Сторінка',
            'fio' => 'ПІБ',
            'email' => 'Email',
            'phone' => 'Телефон',
            'message' => 'Повідомлення',
            'vacancies' => 'Вакансія',
            'code' => 'Код',
            'file' => 'Коментарий_UK',
        ];
    }
}
