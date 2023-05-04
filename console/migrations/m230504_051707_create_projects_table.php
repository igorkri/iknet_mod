<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%projects}}`.
 */
class m230504_051707_create_projects_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%projects}}', [
            'id' => $this->primaryKey(),
            'slug' => $this->string()->comment('Slug'),
            'created_at' => $this->integer()->comment('Дата создания'),
            'updated_at' => $this->integer()->comment('Дата обновления'),
            'category_id' => $this->integer()->comment('Категория'),
            'menu_id' => $this->integer()->comment('Меню'),
            'published' => $this->boolean()->defaultValue(true)->comment('Отображать'),

            'title_uk' => $this->string()->notNull()->comment('Название UK'),
            'text_uk' => $this->text()->notNull()->comment('Текст UK'),
            'seo_title_uk' => $this->string()->comment('SEO Название UK'),
            'seo_description_uk' => $this->string()->comment('SEO Описание UK'),
            'seo_keywords_uk' => $this->string()->comment('SEO Ключевые слова UK'),

            'title_en' => $this->string()->comment('Название EN'),
            'text_en' => $this->text()->comment('Текст EN'),
            'seo_title_en' => $this->string()->comment('SEO Название EN'),
            'seo_description_en' => $this->string()->comment('SEO Описание EN'),
            'seo_keywords_en' => $this->string()->comment('SEO Ключевые слова EN'),

            'title_ru' => $this->string()->comment('Название RU'),
            'text_ru' => $this->text()->comment('Текст RU'),
            'seo_title_ru' => $this->string()->comment('SEO Название RU'),
            'seo_description_ru' => $this->string()->comment('SEO Описание RU'),
            'seo_keywords_ru' => $this->string()->comment('SEO Ключевые слова RU'),

            'image' => $this->string()->comment('Изображение'),
            'image_og' => $this->string()->comment('Изображение'),

        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%projects}}');
    }
}
