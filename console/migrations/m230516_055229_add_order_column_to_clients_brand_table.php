<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%clients_brand}}`.
 */
class m230516_055229_add_order_column_to_clients_brand_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%clients_brand}}', 'order', $this->integer());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%clients_brand}}', 'order');
    }
}
