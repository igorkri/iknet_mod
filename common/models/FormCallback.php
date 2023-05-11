<?php

namespace common\models;

use manchenkov\yii\recaptcha\ReCaptchaValidator;
use Yii;
use yii\db\ActiveRecord;
use yii\helpers\VarDumper;

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
//            [['fio', 'email', 'phone', 'email'], 'required'],
            [['page', 'fio', 'email', 'phone', 'vacancies', 'code', 'file'], 'string', 'max' => 255],
            ['captcha', ReCaptchaValidator::class, 'score' => 0.5, 'action' => ''],
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
            'file' => 'Файл',
        ];
    }

    public function sendEmail($post, $attach = null, $page = null)
    {
//        ->attach(\Yii::getAlias('@backend/web/img/template_free_stock.png'))
        $sendEmail = Yii::$app->mailer->compose(['html' => 'form-html'], ['post' => $post])
            ->setTo($post['email']) // кому
            ->setFrom([Yii::$app->params['senderEmail'] => Yii::$app->params['senderName']]) // від кого
            ->setReplyTo([$post['email'] => $post['fio']])
            ->setSubject('Повідомлення зі сторінки ' . $page . ' | IKNET')
            ->setTextBody($post['message']);
        if($attach){
            $sendEmail->attach(\Yii::getAlias('@frontendWeb' . $attach));
        }
        if($sendEmail->send()){
            return $sendEmail;
        }
    }

    public function getLabel(){
        $lang = \Yii::$app->session->get('_language');
        if($lang == 'ru'){
            return [
                'title' => 'Связаться с нами',
                'fio' => 'Имя',
                'email' => 'Почта',
                'phone' => 'Телефон',
                'page' => 'Страница',
                'message' => 'Ваше сообщение',
                'vacancies' => 'Вакансия',
                'code' => 'Код',
                'file' => 'файл',
            ];
        }elseif($lang == 'en'){
            return [
                'title' => 'Contact us',
                'page' => 'Page',
                'fio' => 'Name',
                'email' => 'Email',
                'phone' => 'Phone',
                'message' => 'Your message',
                'vacancies' => 'Vacancy',
                'code' => 'Code',
                'file' => 'File'
            ];
        }else{
            return [
                'title' => 'Зв’язатись з нами',
                'page' => 'Сторінка',
                'fio' => 'Ім’я',
                'email' => 'Email',
                'phone' => 'Телефон',
                'message' => 'Ваше повідомлення',
                'vacancies' => 'Вакансія',
                'code' => 'Код',
                'file' => 'Файл'
            ];
        }
    }

    public function getLabelGifts(){
        $lang = \Yii::$app->session->get('_language');
        if($lang == 'ru'){
            return [
                'title' => 'Оставьте свои контактные данные и мы с вами свяжемся',
                'fio' => 'Имя',
                'email' => 'Почта',
                'phone' => 'Телефон',
                'page' => 'Страница',
                'message' => 'Ваше сообщение',
                'vacancies' => 'Вакансия',
                'code' => 'Назва/код товару',
                'file' => 'файл',
            ];
        }elseif($lang == 'en'){
            return [
                'title' => 'Leave your contact details and we will contact you',
                'page' => 'Page',
                'fio' => 'Name',
                'email' => 'Email',
                'phone' => 'Phone',
                'message' => 'Your message',
                'vacancies' => 'Vacancy',
                'code' => 'Code',
                'file' => 'File'
            ];
        }else{
            return [
                'title' => 'Залиште свої контактні дані і ми з вами зв’яжемось',
                'page' => 'Сторінка',
                'fio' => 'Ім’я',
                'email' => 'Email',
                'phone' => 'Телефон',
                'message' => 'Ваше повідомлення',
                'vacancies' => 'Вакансія',
                'code' => 'Код',
                'file' => 'Файл'
            ];
        }
    }

    public function getMessError(){
        $lang = \Yii::$app->session->get('_language');
        if($lang == 'ru'){
            return [
                'fio' => 'Укажите пожалуйста Ваш ФИО',
                'email' => 'Укажите, пожалуйста, Ваш Email',
                'phone' => 'Укажите, пожалуйста, Ваш телефон',
                'message' => 'Укажите пожалуйста Ваше сообщение',
                'vacancies' => 'Укажите, пожалуйста, вакансию',
                'code' => 'Укажите пожалуйста код',
            ];
        }elseif($lang == 'en'){
            return [
                'fio' => 'Please enter your full name',
                'email' => 'Please enter your email',
                'phone' => 'Please enter your phone number',
                'message' => 'Please enter your message',
                'vacancies' => 'Please specify the vacancy',
                'code' => 'Please enter the code',
            ];
        }else{
            return [
                'fio' => 'Укажіть будь ласка Ваше ПІБ',
                'email' => 'Укажіть будь ласка Ваш Email',
                'phone' => 'Укажіть будь ласка Ваш телефон',
                'message' => 'Укажіть будь ласка Ваше повідомлення',
                'vacancies' => 'Укажіть будь ласка вакансію',
                'code' => 'Укажіть будь ласка код',
            ];
        }
    }
}
