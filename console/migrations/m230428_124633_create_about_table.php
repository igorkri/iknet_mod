<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%about}}`.
 */
class m230428_124633_create_about_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%about}}', [
            'id' => $this->primaryKey(),
            'title_uk' => $this->string()->comment('Название UK'),
            'title_en' => $this->string()->comment('Название EN'),
            'title_ru' => $this->string()->comment('Название RU'),
            'description_uk' => $this->text()->comment('Описание UK'),
            'description_en' => $this->text()->comment('Описание EN'),
            'description_ru' => $this->text()->comment('Описание RU'),
            'image' => $this->string()->comment('Картинка'),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%about}}');
    }
}
