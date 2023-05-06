<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%home_tabs}}`.
 */
class m230506_193640_create_home_tabs_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%home_tabs}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->notNull()->comment('Название UK'),
            'title_en' => $this->string()->notNull()->comment('Название EN'),
            'title_ru' => $this->string()->notNull()->comment('Название RU'),
            'slug' => $this->string()->unique()->comment('Урл страницы'),
            'section_id' => $this->integer()->comment('Секция отображения'),
            'order' => $this->integer()->comment('Сортировка'),
            'published' => $this->boolean()->defaultValue(true)->comment('Отображать'),
            'description_uk' => $this->text()->comment('Описание UK'),
            'description_en' => $this->text()->comment('Описание EN'),
            'description_ru' => $this->text()->comment('Описание RU'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%home_tabs}}');
    }
}
