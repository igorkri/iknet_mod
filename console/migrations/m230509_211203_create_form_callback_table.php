<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%form_callback}}`.
 */
class m230509_211203_create_form_callback_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%form_callback}}', [
            'id' => $this->primaryKey(),
            'created_at' => $this->dateTime()->comment('Дата'),
            'page' => $this->string()->comment('Сторінка'),
            'fio' => $this->string()->comment('ПІБ'),
            'email' => $this->string()->comment('Email'),
            'phone' => $this->string()->comment('Телефон'),
            'message' => $this->text()->comment('Повідомлення'),
            'vacancies' => $this->string()->comment('Вакансія'),
            'code' => $this->string()->comment('Код'),
            'file' => $this->string()->comment('Коментарий_UK'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%form_callback}}');
    }
}
