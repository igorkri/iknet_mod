<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%reclaimed}}`.
 */
class m230507_202924_create_reclaimed_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%reclaimed}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->notNull()->comment('Назва UK'),
            'title_en' => $this->string()->notNull()->comment('Назва EN'),
            'title_ru' => $this->string()->notNull()->comment('Назва RU'),
            'value_uk' => $this->string()->comment('Величина UK'),
            'value_en' => $this->string()->comment('Величина EN'),
            'value_ru' => $this->string()->comment('Величина RU'),
            'qty' => $this->integer()->comment('К-ть'),
            'order' => $this->integer()->comment('Сортування'),
            'published' => $this->boolean()->defaultValue(true)->comment('Відображати'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%reclaimed}}');
    }
}
