<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%home_section}}`.
 */
class m230507_102358_create_home_section_table extends Migration
{
    /**
     * {@inheritdoc}
     * 1 => 'Інжиніринг в енергетиці',
       2 => 'Приєднання об’єктів',
       3 => 'Напрямки бізнесу'
     */
    public function safeUp()
    {
        $this->createTable('{{%home_section}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->notNull()->comment('Назва UK'),
            'title_en' => $this->string()->notNull()->comment('Назва EN'),
            'title_ru' => $this->string()->notNull()->comment('Назва RU'),
            'slug' => $this->string()->unique()->comment('Урл секції'),
            'order' => $this->integer()->comment('Сортування'),
            'published' => $this->boolean()->defaultValue(true)->comment('Відображати'),
            'description_uk' => $this->text()->comment('Опис UK'),
            'description_en' => $this->text()->comment('Опис EN'),
            'description_ru' => $this->text()->comment('Опис RU'),
            'image' => $this->string()->comment('Зображення'),
            'image_2' => $this->string()->comment('Зображення 2'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%home_section}}');
    }
}
