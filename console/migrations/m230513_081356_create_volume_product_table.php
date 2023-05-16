<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%volume_product}}`.
 */
class m230513_081356_create_volume_product_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%volume_product}}', [
            'id' => $this->primaryKey(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%volume_product}}');
    }
}
