<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%menu}}`.
 */
class m230415_064706_create_menu_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%menu}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->notNull()->comment('Название UK'),
            'title_en' => $this->string()->notNull()->comment('Название EN'),
            'title_ru' => $this->string()->notNull()->comment('Название RU'),
            'slug' => $this->string()->unique()->comment('SLUG'),
            'parent_id' => $this->integer()->comment('Родитель'),
            'order' => $this->integer()->comment('Сортировка'),
            'published' => $this->boolean()->defaultValue(true)->comment('Отображать'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%menu}}');
    }
}
