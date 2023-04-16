<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%category}}`.
 */
class m230415_065454_create_category_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%category}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->notNull()->comment('Название UK'),
            'title_en' => $this->string()->notNull()->comment('Название EN'),
            'title_ru' => $this->string()->notNull()->comment('Название RU'),
            'slug' => $this->string()->unique()->comment('SLUG'),
            'parent_id' => $this->integer()->comment('Родитель'),
            'order' => $this->integer()->comment('Сортировка'),
            'published' => $this->boolean()->defaultValue(true)->comment('Отображать'),
            'image' => $this->string()->unique()->comment('Изображение'),
            'seo_description_uk' => $this->string()->unique()->comment('SEO Описание UK'),
            'seo_description_en' => $this->string()->unique()->comment('SEO Описание EN'),
            'seo_description_ru' => $this->string()->unique()->comment('SEO Описание RU'),
            'seo_keywords_uk' => $this->string()->unique()->comment('SEO Ключи UK'),
            'seo_keywords_en' => $this->string()->unique()->comment('SEO Ключи EN'),
            'seo_keywords_ru' => $this->string()->unique()->comment('SEO Ключи RU'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%category}}');
    }
}
