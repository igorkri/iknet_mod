<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%reviews}}`.
 */
class m230428_110823_create_reviews_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%reviews}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->comment('Название UK'),
            'title_en' => $this->string()->comment('Название EN'),
            'title_ru' => $this->string()->comment('Название RU'),
            'description_uk' => $this->text()->comment('Описание UK'),
            'description_en' => $this->text()->comment('Описание EN'),
            'description_ru' => $this->text()->comment('Описание RU'),
            'author_uk' => $this->string()->comment('Автор UK'),
            'author_en' => $this->string()->comment('Автор EN'),
            'author_ru' => $this->string()->comment('Автор RU'),

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%reviews}}');
    }
}
