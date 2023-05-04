<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%contacts}}`.
 */
class m230504_111852_create_contacts_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%contacts}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->comment('Название_UK'),
            'title_en' => $this->string()->comment('Название_EN'),
            'title_ru' => $this->string()->comment('Название_RU'),
            'adres_uk' => $this->string()->comment('Адрес_UK'),
            'adres_en' => $this->string()->comment('Адрес_EN'),
            'adres_ru' => $this->string()->comment('Адрес_RU'),
            'coment_uk' => $this->text()->comment('Коментарий_UK'),
            'coment_en' => $this->text()->comment('Коментарий_EN'),
            'coment_ru' => $this->text()->comment('Коментарий_RU'),
            'email' => $this->string()->comment('Почта'),
            'site' => $this->string()->comment('Сайт'),
            'tel1' => $this->string()->comment('Телефон_1'),
            'tel2' => $this->string()->comment('Телефон_2'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%contacts}}');
    }
}
