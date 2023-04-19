<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%system}}`.
 */
class m230416_180958_create_system_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%system}}', [
            'id' => $this->primaryKey(),
            'key' => $this->string(),
            'title_uk' => $this->string(),
            'title_en' => $this->string(),
            'title_ru' => $this->string(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%system}}');
    }
}
